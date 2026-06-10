@echo off
chcp 65001 > nul
title Iniciar Guia de Procesos - Offline

echo ==========================================================
echo    INICIANDO GUÍA DE PROCESOS (MODO OFFLINE)
echo ==========================================================
echo.

:: Detectar Node.js
where node >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo [OK] Se detectó Node.js instalado.
    echo Iniciando con servidor de desarrollo (Vite)...
    echo.
    if not exist node_modules (
        echo [INFO] Carpeta node_modules no encontrada. Instalando dependencias...
        call npm install
    )
    echo [INFO] Iniciando servidor y abriendo la aplicación en tu navegador...
    call npm run dev -- --open
    goto end
)

:: Detectar Python
where python >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo [OK] Se detectó Python instalado.
    echo Iniciando servidor local con redirección de rutas...
    echo.
    python serve_offline.py
    goto end
)

echo ==========================================================
echo [ERROR] No se detectó Node.js ni Python en el sistema.
echo ==========================================================
echo Para ejecutar esta aplicación offline, necesitas instalar:
echo 1. Node.js (Recomendado) -> https://nodejs.org/
echo    O bien:
echo 2. Python -> https://www.python.org/
echo.
echo Presiona cualquier tecla para salir...
pause > nul

:end
