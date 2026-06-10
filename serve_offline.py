import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 8080
DIRECTORY = "dist"

class GuiaProcesosRequestHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Si la ruta comienza con /guia_procesos/, la redirigimos a la raíz del servidor (carpeta dist)
        if path.startswith("/guia_procesos/"):
            path = path.replace("/guia_procesos/", "/", 1)
        return super().translate_path(path)

if __name__ == "__main__":
    if not os.path.exists(DIRECTORY):
        print(f"Error: La carpeta '{DIRECTORY}' no existe. Por favor, compila el proyecto primero con 'npm run build'.")
        sys.exit(1)
        
    os.chdir(DIRECTORY)
    
    # Permitir reutilización de direcciones
    socketserver.TCPServer.allow_reuse_address = True
    
    port = PORT
    httpd = None
    max_port_attempts = 100
    
    for attempt in range(max_port_attempts):
        try:
            httpd = socketserver.TCPServer(("", port), GuiaProcesosRequestHandler)
            break
        except OSError as e:
            # Capturar errores de puerto en uso (WinError 10048, etc.)
            print(f"Puerto {port} en uso, intentando con el puerto {port + 1}...")
            port += 1
            
    if httpd is None:
        print(f"Error: No se pudo encontrar un puerto libre en el rango {PORT} a {PORT + max_port_attempts - 1}.")
        sys.exit(1)
        
    url = f"http://localhost:{port}/guia_procesos/"
    print(f"\n==========================================================")
    print(f" Servidor offline iniciado exitosamente en:")
    print(f" {url}")
    print(f"==========================================================\n")
    print("Abriendo la aplicación en tu navegador...")
    webbrowser.open(url)
    print("Presiona Ctrl+C para detener el servidor.")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
