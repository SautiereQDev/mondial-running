"use client";
import {usePathname} from "next/navigation";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";
import {getCleanBreadcrumbs} from "@/utils/url";


export default function CustomBreadCrumb() {

	const pathName: string = usePathname();

	const pages = getCleanBreadcrumbs(pathName);

	return (
		<div className="py-6 max-w-[85vw] mx-auto">
			{pathName !== "/" ? (
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Accueil</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator/>
						{pages.map((page, index) => (
							<React.Fragment key={index}>
								<BreadcrumbItem>
									<BreadcrumbLink
										href={'/' + pages.slice(0, index + 1).join("/")}>{page}</BreadcrumbLink>
								</BreadcrumbItem>
								{index < pages.length - 1 && <BreadcrumbSeparator key={`sep-${index}`}/>}
							</React.Fragment>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			) : null
			}
		</div>
	)
}
