# Security maintenance

Replaced the unsupported Create React App build toolchain with Vite 6. The application keeps its React version, existing UI libraries, root HTML content and `build/` output directory. Use Node 20 or newer and `npm ci`, `npm run build`, `npm test`. React 16/17 libraries still require legacy peer dependency resolution, recorded in `.npmrc`.

Only `REACT_APP_` variables are included in the client build, matching CRA semantics. Those variables are public browser configuration and must never contain secrets. Configure the host to serve `index.html` for client routes. No production deployment was performed.
