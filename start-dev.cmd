@echo off
cd /d "%~dp0"

echo Starting STS Traders...
call npm install
call npm --prefix client install
call npm --prefix server install
call npm run dev
