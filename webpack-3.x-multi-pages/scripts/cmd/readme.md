# path bug

> ok

```json

{
    "bin": {
        "app": "app",
        "dev": "dev",
        "html": "html",
        "rmrf": "rmrf"
    },
}

```

> bug

```json

{
    "bin": {
        "app": "scripts/cmd/app",
        "dev": "scripts/cmd/dev",
        "html": "scripts/cmd/html",
        "rmrf": "scripts/cmd/rmrf"
    },
}

```

> partly ok & bug

```json

{
    "bin": {
        "app": "./scripts/cmd/app.cmd",
        "dev": "scripts/cmd/dev",
        "html": "scripts/cmd/html",
        "rmrf": "scripts/cmd/rmrf"
    },
}

```

