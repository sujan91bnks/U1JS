import { Root, ViewOptions } from ".";
import { Element, Paragraph } from "./element";

export class ViewOptionsToElement {
	parse(options: ViewOptions | ViewOptions[], parent: Element | Root) {
		if (Array.isArray(options)) {
			return this.parseViewOptionsArray(options, parent);
		} else {
			return this.parseViewOptions(options, parent);
		}
	}

	private parseViewOptions(options: ViewOptions, parent: Element | Root) {
		switch (options.type) {
			case "PARAGRAPH":
				return new Paragraph(options, parent);
			default:
				throw new Error("Invalid view type");
		}
	}

	private parseViewOptionsArray(
		options: ViewOptions[],
		parent: Element | Root
	) {
		const elements: Element[] = [];
		for (const option of options) {
			elements.push(this.parseViewOptions(option, parent));
		}
		return elements;
	}
}