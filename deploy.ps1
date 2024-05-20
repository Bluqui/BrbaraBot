Write-Host "Adicionando './'" -ForegroundColor Cyan
git add ./
Write-Host "`nFazendo Commit" -ForegroundColor Blue
git commit -m "0.1.0"
Write-Host "`nDando o Push" -ForegroundColor DarkBlue
git push
Write-Host "`n"

Write-Host "Registrar os ShashCommands?" -ForegroundColor Cyan
$confirmSlashDeploy = Read-Host "[y] - [n]"
if ($confirmSlashDeploy -eq 'Y') {
    Write-Host "Registrando ShashCommands..."
    node .\main\deploy-commands.js
} elseif ($confirmSlashDeploy -eq 'N'){
    Write-Host "Registro cancelado"
} else {return}

Write-Host "Iniciar?" -ForegroundColor Cyan
$confirmSlashDeploy = Read-Host "[y] - [n]"
if ($confirmIni -eq 'Y') {
    Write-Host "Iniciando..."
    node .\main\index.js
} elseif ($confirmIni -eq 'N'){
    Write-Host "Inicialização cancelada"
} else {return}