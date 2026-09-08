Set-Location $PSScriptRoot

Write-Host ""
Write-Host "AD BEAUTY ARTIST V3" -ForegroundColor Magenta
Write-Host "Serveur local : http://localhost:8010" -ForegroundColor Green
Write-Host ""

Start-Process "http://localhost:8010/index.html"

py -m http.server 8010