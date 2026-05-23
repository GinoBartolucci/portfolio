import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core"
import { HttpClient, provideHttpClient } from "@angular/common/http"
import { provideRouter } from "@angular/router"
import { provideMarkdown } from "ngx-markdown"

import { routes } from "./app.routes"

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideHttpClient(),
		provideMarkdown({ loader: HttpClient }),
		provideRouter(routes),
	],
}
