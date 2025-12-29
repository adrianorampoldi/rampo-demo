# rampo-demo
demo repository for testing and teaching

# history
2021-09-19 repo created
2021-09-19 readme modified
2025-12-29 aperto repo con codespace, creato server web node.js e istruzioni con agente AI

# usage
Install dipendenze (se servono) e avvia il server:

```
cd /workspaces/rampo-demo
npm install  # non strettamente necessario per ora
npm start    # server su http://localhost:3000
```

Per esporre su Codespaces:
- avvia con `HOST=0.0.0.0 PORT=3000 npm start`
- nella tab Ports segna la porta 3000 come Public e usa l'URL generato

Per eseguire i test automatici:

```
npm test
```

