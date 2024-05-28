param (
    [switch]$y
)

if(!$y) {


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


    Write-Host "`nAdicionando todos os arquivos..." -ForegroundColor Cyan
    git add ./
    Write-Host "Fazendo Commit" -ForegroundColor Blue
    git commit -m "0.4.0"
    Write-Host "`nDando o Push" -ForegroundColor DarkBlue
    git push origin HEAD:four


    Write-Host "Iniciar?" -ForegroundColor Cyan
    do {
        $confirmIni = Read-Host "[y] - [n]"
        if ($confirmIni -eq 'Y') {
            Write-Host "Iniciando..."
            nodemon
        } elseif ($confirmIni -eq 'N'){
            Write-Host "Inicialização cacelada"
        } else {}
    } while ($confirmIni -ne 'Y' -and $confirmIni -ne 'N')


} else {


    Write-Host "Registrando ShashCommands..."
    node .\main\deploy-commands.js

    Write-Host "Adicionando todos os arquivos" -ForegroundColor Cyan
    git add ./
    Write-Host "`nFazendo Commit" -ForegroundColor Blue
    git commit -m "0.4.0"
    Write-Host "`nDando o Push" -ForegroundColor DarkBlue
    git push origin HEAD:four

    Write-Host "Iniciando..."
    nodemon

}