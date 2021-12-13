import React, { useRef } from 'react'
import Editor from '@draft-js-plugins/editor'
import {
    EditorState,
    RichUtils,
    DraftEditorCommand,
    DraftHandleValue,
    ContentBlock,
  } from 'draft-js'
import '@draft-js-plugins/static-toolbar/lib/plugin.css';
import createToolbarPlugin, { Separator } from '@draft-js-plugins/static-toolbar';
import createUndoPlugin from '@draft-js-plugins/undo';
import '@draft-js-plugins/undo/lib/plugin.css';

interface ArticleProps{
    className? : string;
    article : EditorState;
    setArticle : React.Dispatch<React.SetStateAction<EditorState>>;
    plugin? : any[];
    readOnly? : boolean;
}

interface HeadlinePickerProps{
    artikel : EditorState;
    setArticle : React.Dispatch<React.SetStateAction<EditorState>>;
}

const ArticleFields = ({className, article, setArticle, plugin, readOnly=false} : ArticleProps) => {

    const typeMap : { [key : string ] : string} = {
        "unstyled": 'text-typeface font-Inter text-sm',
        "header-one": 'font-Inter text-2xl font-bold',
        "header-two": 'font-Inter text-xl font-bold',
        "header-three": 'font-Inter text-lg font-bold',
        "STRIKETHROUGH" : 'font-Inter text-sm line-through'
      };
      
      const handleStyling = (contentBlock: ContentBlock) : string => {
        const type = contentBlock.getType();
        if (type === 'atomic') {
          return 'content-img-container';
        }
        if (typeMap[type]!) {
          return typeMap[type]!;
        }
        else{
            return "unstyled"
        }
      }

    const editorRef = useRef<Editor>(null);

    const handleKeyCommand = (
        command: DraftEditorCommand,
        editorState: EditorState
    ): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
        setArticle(newState);
        return 'handled';
        }
        return 'not-handled';
    };
    
    const staticToolbarPlugin = createToolbarPlugin();
    const { Toolbar } = staticToolbarPlugin;
    const undoPlugin = createUndoPlugin();
    const { UndoButton, RedoButton } = undoPlugin;
    (plugin!).push(staticToolbarPlugin, undoPlugin)
  
    return (
        <section className={`${className}`}>
            <article className="mx-auto border-2 shadow-md my-5 p-10 max-w-6xl">
                <Editor
                    editorState={article}
                    onChange={setArticle}
                    handleKeyCommand={handleKeyCommand}
                    ref={editorRef}
                    plugins={plugin}
                    blockStyleFn={handleStyling}
                    readOnly={readOnly}
                    />
            </article>
        </section>
    )
}

export default ArticleFields
