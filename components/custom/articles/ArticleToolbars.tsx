import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import OriginalButton from '../button/OriginalButton'
import { faImages, faSave } from '@fortawesome/free-solid-svg-icons'

interface ArticleToolbarsProps{
    richTextHandler: (
        inlineStyle: string
    ) => (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
      
    blockTypeHandler: (
        bType: string
    ) => (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
      
    onImageClick: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    saveHandler: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const ArticleToolbars = ({richTextHandler, blockTypeHandler, onImageClick, saveHandler} : ArticleToolbarsProps) => {
    return (
       <div className="" data-aos="fade-up">
            <div className="flex flex-col shadow-md sticky z-40 top-40">
                <OriginalButton variant={'outlined'} onClick={blockTypeHandler('header-one')}>
                    <strong>H1</strong>
                </OriginalButton>
                <OriginalButton variant={'outlined'} onClick={blockTypeHandler('header-two')}>
                    <strong>H2</strong>
                </OriginalButton>
                <OriginalButton variant={'outlined'} onClick={blockTypeHandler('header-three')}>
                    <strong>H3</strong>
                </OriginalButton>
                <OriginalButton variant={'outlined'} onClick={richTextHandler('BOLD')}>
                    <strong>B</strong>
                </OriginalButton>
                <OriginalButton variant={'outlined'} onClick={richTextHandler('ITALIC')}>
                    <strong><i>i</i></strong>
                </OriginalButton>
                <OriginalButton variant={'outlined'} onClick={richTextHandler('UNDERLINE')}>
                    <strong><u>U</u></strong>
                </OriginalButton>
                <OriginalButton variant={'outlined'} onClick={blockTypeHandler('STRIKETHROUGH')}>
                    <p className="line-through font-bold">S</p>
                </OriginalButton>
                <OriginalButton variant={'outlined'} onClick={onImageClick}>
                    <FontAwesomeIcon icon={faImages} size="1x"/>
                </OriginalButton>
                <OriginalButton variant={'outlined'} onClick={saveHandler}>
                    <FontAwesomeIcon icon={faSave} size="1x"/>
                </OriginalButton>
            </div>
       </div>
    )
}

export default ArticleToolbars
