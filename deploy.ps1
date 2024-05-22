Write-Host "Registrar os ShashCommands?" -ForegroundColor Cyan
do {
    $confirmSlashDeploy = Read-Host "[y] - [n]"
    if ($confirmSlashDeploy -eq 'Y') {
        Write-Host "Registrando ShashCommands..."
        node .\main\deploy-commands.js
    } elseif ($confirmSlashDeploy -eq 'N'){
        Write-Host "Registro cancelado"
    } else {}
} while ($confirmSlashDeploy -ne 'Y' -and $confirmSlashDeploy -ne 'N')

Write-Host "Adicionando todos os arquivos" -ForegroundColor Cyan
git add ./
Write-Host "`nFazendo Commit" -ForegroundColor Blue
git commit -m "0.2.0"
Write-Host "`nDando o Push" -ForegroundColor DarkBlue
git push origin main
Write-Host "`n"

Write-Host "Iniciar?" -ForegroundColor Cyan
do {
    $confirmIni = Read-Host "[y] - [n]"
    if ($confirmIni -eq 'Y') {
        Write-Host "Iniciando..."
        node .\main\index.js
    } elseif ($confirmIni -eq 'N'){
        Write-Host "Inicialização cacelada"
    } else {}
} while ($confirmIni -ne 'Y' -and $confirmIni -ne 'N')