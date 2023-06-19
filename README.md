# SvelteKit + Capacitor

Segui install: [https://capacitorjs.com/docs/getting-started](https://capacitorjs.com/docs/getting-started)

Impostare Svelte-kit con static rendering:

```php
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		})
	},
	preprocess: vitePreprocess()
};

export default config;
```

e creando `+page.js` che contenga: `export const ssr = false;`

Aggiungere live reload con:

1. da SvelteKit `npm run dev --host`
2. prendere IP “Network” e copiarlo in `capacitor.config.json` :

```json
{
	"appId": "ch.realviews.app",
	"appName": "myRealViews",
	"webDir": "build",
	"server": {
		"url": "http://192.168.1.183:5173/",
		"cleartext": true,
		"androidScheme": "https"
	}
}
```

1. `npx cap copy` che copia la configurazione di capacitor nel progetto iOS/Android
2. `npx cap sync` sincronizza il progetto iOS/Android con il codice creato in locale
3. `npx cap run ios` per far partire il simulatore 
4. `webDir` è impostata su build, se non funziona fare un `npm run build` una volta in modo che venga creata la cartella

E’ possibile runnare l’app sullo smartphone sempre tramite  `npm run dev --host` ovviamente stando sullo stesso network (sia sul computer che su iPhone) usando SOLO IP locale.

Per build l’App:

1. Rimuovere `url` e `cleartext` da `capacitor.config.json` 
2. Fare un `npm run build` 
3. Da XCode fare “build” selezionando il device
