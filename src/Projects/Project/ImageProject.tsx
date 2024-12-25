import { Proj } from "./Project";

export function ImageProject({ proj: theProject }: { proj: Proj }) {
	if (!theProject.image) return <></>;
	const classesCss = `image-project ${theProject.image.classes ?? ""}`;
	return (
		<div className="colonne">
			<div className="ligne">
				<img
					className={classesCss}
					src={theProject.image.src}
				/>
			</div>
		</div>
	);
}
