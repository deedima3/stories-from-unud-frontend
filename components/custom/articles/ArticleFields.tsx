import React, { useRef } from 'react'
import Editor from '@draft-js-plugins/editor'
import {
    EditorState,
    RichUtils,
    DraftEditorCommand,
    DraftHandleValue,
    ContentBlock,
  } from 'draft-js'

interface ArticleProps{
    className? : string;
    article : EditorState;
    setArticle : React.Dispatch<React.SetStateAction<EditorState>>;
    plugin? : any[];
    readOnly? : boolean;
}

const ArticleFields = ({className, article, setArticle, plugin, readOnly=false} : ArticleProps) => {

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
  
    return (
        <section className={`${className}`}>
            <article className="max-w-2xl mx-auto">
                <Editor
                    editorState={article} 
                    onChange={setArticle}
                    handleKeyCommand={handleKeyCommand}
                    ref={editorRef}
                    plugins={plugin}
                    readOnly={readOnly}
                    />
            </article>
        </section>
    )
}

export default ArticleFields
