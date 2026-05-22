import { HttpClient } from "@angular/common/http"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs"

import { ProjectsComponent } from "./projects.component"

describe("ProjectsComponent", () => {
	let component: ProjectsComponent
	let fixture: ComponentFixture<ProjectsComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProjectsComponent],
			providers: [
				{
					provide: HttpClient,
					useValue: {
						get: jasmine.createSpy("get").and.returnValue(of([])),
					},
				},
			],
		}).compileComponents()

		fixture = TestBed.createComponent(ProjectsComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it("should create", () => {
		expect(component).toBeTruthy()
	})
})
