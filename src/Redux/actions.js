import { CREATE_ITEM } from "./Types";

export function createItem(item) {
	return {
		type: CREATE_ITEM,
		payload: item
	}
}