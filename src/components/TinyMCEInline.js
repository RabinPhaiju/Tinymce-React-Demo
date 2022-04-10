import React, { useState, useEffect, useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"

function TinyMCEInline() {
  const [initialValue, setInitialValue] = useState(undefined)
  const [innerHtml, setInnerHtml] = useState("")
  const editorRef = useRef(null)
  const [dirty, setDirty] = useState(false)
  useEffect(() => setDirty(false), [initialValue])
  useEffect(() => {
    // a real application might do a fetch request here to get the content
    setTimeout(
      () => setInitialValue('<p style="text-align: left;"><strong>Initial contents</strong></p>'),
      1500
    )
  }, [])
  const handleEditorChange = (newText) => {
    console.log("Content was updated:", newText)
  }
  const save = () => {
    console.log("save")
    if (editorRef.current) {
      const content = editorRef.current.getContent()
      setDirty(false)
      editorRef.current.setDirty(false)
      // an application would save the editor content to the server here
      console.log(content)
      setInnerHtml(content)
    }
  }

  return (
    <div>
      <form method='post'>
        <div className='main'>
          <Editor
            // ****** Configuring editor source
            apiKey='w2pjq698fbk2koqkcvcxonqoxwvq3elmk4qigopo8ijkehkw'
            // cloudChannel='5-stable' // The channel of TinyMCE used when loading from Tiny Cloud.
            scriptLoading={
              {
                // async: true, //the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.
                // defer: true, //the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
                // delay: 1000, //delay in milliseconds.
              }
            }
            // tinymceScriptSrc='https://cdn.tiny.cloud/1/w2pjq698fbk2koqkcvcxonqoxwvq3elmk4qigopo8ijkehkw/tinymce/5/tinymce.min.js' //to specify an external version of TinyMCE to lazy load.
            tinymceScriptSrc='https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js'
            // ****** Configuring page elements
            id='my_tinymce'
            inline={true}
            // tagName='textarea' //The tag used for creating an inline editor. Ignored for a classic (iframe) editor.
            textareaName='my_textarea' //The name attribute on the textarea tag (HTML element). Used for creating the classic (iframe) editor. Ignored for an inline editor.
            // ***** Configuring editor settings
            init={{
              deprecation_warnings: false,
              height: "60vh",
              width: "100%",

              // resize: 'both',//true/'both'/'vertical'/'horizontal'/false
              // skin: "oxide-dark", //'oxide', 'oxide-dark',
              // theme: "silver", //'silver', 'gray', 'modern', 'black', 'bootstrap', 'mobile', 'mobile-dark', 'custom'
              selector: "#myeditablediv",
              // selector: "textarea",
              // mode: "textareas",
              // preview_styles: "font-size color",
              // icons_url: "https://www.example.com/icons/material/icons.js", // load icon pack
              // icons: "material",
              // draggable_modal: true, //The modal window can be dragged by the header.
              //   style_formats_autohide: true, //hides of styles that can’t be applied to the current context
              branding: false,
              // statusbar: false,
              menubar: false, //file/edit/view/format/table/tools/insert/help

              plugins: [
                //This will be combined with plugins in the init prop.
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount ",
                "emoticons pagebreak hr nonbreaking",
                "autosave directionality fullscreen",
                "save template quickbars pageembed ",
                // "imagetools", // cloud functionality // moving to premium
                // "autoresize", //This plugin automatically resizes the editor to the content inside it
                // "spellchecker casechange checklist export linkchecker mentions drive rtc", // premium
              ],
              // autoresize_bottom_margin: 100,//autoresize
              // autoresize_overflow_padding: 50,
              // autoresize_on_init: false,
              //   ...image_style, // upload image
              //   ...templates_style, // templates
              //   ...link_style, // link
              //   ...media_style, // media
              //   ...color_style, // color
              //   ...table_style, // table
              //   ...menu_style, // menu

              //  toolbar //This will override the toolbar in the init prop.
              toolbar1:
                // eslint-disable-next-line no-multi-str
                "undo redo | formatselect | fontselect | fontsizeselect | \
            copy paste  | blockquote lineheight forecolor backcolor charmap | \
              bold italic underline strikethrough subscript superscript code removeformat | \
              alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | \
              insertdatetime pageembed ",

              // lists_indent_on_tab: false,

              toolbar2:
                // eslint-disable-next-line no-multi-str
                "table tabledelete | tableprops tablerowprops tablecellprops |\
             tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol |\
             help | print preview anchor searchreplace visualblocks emoticons |\
          autolink hr pagebreak nonbreaking| restoredraft | ltr rtl | fullscreen template",

              font_formats:
                " Oswald; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",

              content_css: "/mycontent.css",
              importcss_append: true,

              content_style: `@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
            body {font-size: 12pt;}
            blockquote {
  border: 0;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: .1em;
  margin: 2.5em auto;

  padding: 0 2rem;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}

blockquote::before {
  color: #000000;
  content: '“';
  font-family: 'georgia';
  font-size: 4em;
  left: 0%;
  pointer-events: none;
  position: absolute;
  top: -.75em;
}

blockquote::after {
  bottom: -1.2em;
  color: #000000;
  content: '”';
  font-family: 'georgia';
  font-size: 4em;
  pointer-events: none;
  position: absolute;
  right: 0%;
}
            `,
              // "@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap'); body { font-family: Oswald; }", // default
              fontsize_formats:
                "8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 22pt 24pt 36pt 48pt 60pt 72pt 96pt",
              lineheight_formats: "0.8 0.9 1 1.1 1.2 1.3 1.4 1.5 2",
            }}
            // ****** Managing the editor
            disabled={false} //Disables the editor.
            initialValue={initialValue}
            placeholder='Type here...'
            // value={
            //   "<p>This is the initial content of the editor</p>" +
            //   ReactDOMServer.renderToStaticMarkup(<Test />)
            // } // Sets the HTML content of the editor when operating as a controlled component.
            // onEditorChange={(newText) => handleEditorChange(newText)} // An event handler for notifying when the editor is about to create an undo level, and preventing it if required.
            onInit={(evt, editor) => (editorRef.current = editor)} // An event handler for notifying when the editor has initialized.
            onDirty={() => setDirty(true)} // An event handler for notifying when the editor becomes dirty.
            //https://www.tiny.cloud/docs/integrations/react/#usingthetinymcereactcomponentasacontrolledcomponent
            // *** controlled component // https://www.tiny.cloud/docs/integrations/react/#usingthetinymcereactcomponentasacontrolledcomponent
          />
          <button onClick={save} disabled={!dirty}>
            Save
          </button>
          {dirty && <p>You have unsaved content!</p>}
          <div className='innerHtml '>
            {innerHtml !== "" && (
              <div
                className='no-tailwindcss-base'
                dangerouslySetInnerHTML={{ __html: innerHtml }}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default TinyMCEInline
