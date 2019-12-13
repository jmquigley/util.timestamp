import { timestamp } from "./index";

test("Get current timestamp", () => {
	const dt = timestamp();
	expect(typeof dt).toBe("string");
	expect(dt.length).toBe(17);
});
