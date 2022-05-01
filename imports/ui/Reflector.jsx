import * as React from "react";
import { useMirror } from "react-mirror";

export const Reflector = () => {
	const [ref, reflection] = useMirror({ className: "Frame" });

	return (
		<div className="Reflector">
			<h1>React Mirror Demo</h1>

			<div className="Demo">
			<div ref={ref}>
				<input className="Input" placeholder="type something..." />
				<div style={{ padding: 10 }}>Mirror mirror in my dom</div>
			</div>

			{reflection}
			</div>
		</div>
	);
}