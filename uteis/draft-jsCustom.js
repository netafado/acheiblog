import { ContentState, convertFromHTML, EditorState } from "draft-js";

export const stringHtmlDataToDraftState = stringHtml => {
    const blocksFromHTML = convertFromHTML(stringHtml)
    return EditorState.createWithContent(ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
    )) 
}