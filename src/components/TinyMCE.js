import React, { useState, useEffect, useRef } from "react"

import { Editor } from "@tinymce/tinymce-react"
import image_style from "./editor_init/image_style"
import media_style from "./editor_init/media_style"
import templates_style from "./editor_init/templates_style"
import link_style from "./editor_init/link_style"
import color_style from "./editor_init/color_style"
import table_style from "./editor_init/table_style"
import menu_style from "./editor_init/menu_style"
import custom_button from "./editor_init/custom_button"
import paste_style from "./editor_init/paste_style"
import textpattern_style from "./editor_init/textpattern_style"
import quickbar_style from "./editor_init/quickbar_style"
import toolbar_style from "./editor_init/toolbar_style"
import content_style from "./editor_init/content_style"

const TinyMCE = ({ id,content="teest",onEditorChange }) => {
  const [isEditorLoading, setIsEditorLoading] = useState(false)
  const [initialValue, setInitialValue] = useState(undefined)
  const [innerHtml, setInnerHtml] = useState("")
  const editorRef = useRef(null)
  const [dirty, setDirty] = useState(false)

  const random_pin = Math.floor(Math.random() * 10000)

  useEffect(() => setDirty(false), [initialValue])
  useEffect(() => {
      setInitialValue(`<p style="text-align: left;"><strong>${content}</strong></p>`)
  }, [content])

  const save = (e) => {
    e.preventDefault()
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
  useEffect(() => {

    const existingScript = document.getElementById('test-content')
    if (existingScript) {
      console.log(existingScript)
      existingScript.onclick = () => {
        existingScript.innerHTML = "You have clicked me!"
      }
    }
  }, [innerHtml])


  return (
    <div className='main'>
      {isEditorLoading && <div>Loading...</div>}
      <form>
        <Editor
          // ****** Configuring editor source
          // apiKey='w2pjq698fbk2koqkcvcxonqoxwvq3elmk4qigopo8ijkehkw'
          // cloudChannel='5-stable' // The channel of TinyMCE used when loading from Tiny Cloud.
          scriptLoading={
            {
              // async: true, //the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.
              // defer: true, //the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
              // delay: 1000, //delay in milliseconds.
            }
          }
          // tinymceScriptSrc='https://cdn.tiny.cloud/1/w2pjq698fbk2koqkcvcxonqoxwvq3elmk4qigopo8ijkehkw/tinymce/5/tinymce.min.js'
          // tinymceScriptSrc='https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js'
          // ****** Configuring page elements
          // id='my_tinymce'
          id={id}
          // inline={true}
          inline={false} //later //Load the editor as part of the page; sharing the page styles and selection.
          tagName='textarea' //The tag used for creating an inline editor. Ignored for a classic (iframe) editor.
          textareaName='my_textarea' //The name attribute on the textarea tag (HTML element). Used for creating the classic (iframe) editor. Ignored for an inline editor.
          // ***** Configuring editor settings
          init={{
            init_instance_callback: function (editor) {
              // console.log("Editor: " + editor.id + " is now initialized.")
              setIsEditorLoading(false)
            },
            // convert_fonts_to_spans: false,
            // element_format: "html",
            // encoding: 'xml',
            // browser_spellcheck: true,
            ///
            // extended_valid_elements: "mycustomblock[id],mycustominline",
            // custom_elements: "mycustomblock,~mycustominline",

            ///

            deprecation_warnings: false,
            maxHeight: "100vh",
            width: "100%",
            // max_height: "100vh",
            // max_width: "100vw",

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
            style_formats_autohide: true, //hides of styles that can’t be applied to the current context
            branding: false,
            // statusbar: false,
            // menubar: true, //file/edit/view/format/table/tools/insert/help
            menubar: false,

            plugins: [
              //This will be combined with plugins in the init prop.
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount ",
              "emoticons pagebreak hr nonbreaking",
              "autosave directionality fullscreen",
              "save template quickbars tabfocus textpattern",
              // "imagetools", // cloud functionality // moving to premium
              "autoresize", //This plugin automatically resizes the editor to the content inside it // needs max height
              // "spellchecker casechange checklist export linkchecker mentions drive rtc", // premium
            ],
            // autoresize_bottom_margin: 100,//autoresize
            // autoresize_overflow_padding: 50,
            // autoresize_on_init: false,

            tabfocus_elements: ":prev,:next",

            // save_enablewhendirty: true,
            // save_oncancelcallback: function () { console.log('Save canceled'); },
            // save_onsavecallback: function () { console.log('Saved'); },

            // ...paste_style,
            // ...textpattern_style,
            // ...quickbar_style,
            ...image_style, // upload image
            ...templates_style('rabin',random_pin), // templates
            ...link_style, // link
            ...media_style, // media
            ...color_style, // color
            ...table_style, // table
            ...menu_style, // menu
            ...custom_button, // custom button
            ...toolbar_style,


            // content_css: "dark",
            // content_css_cors: true,//the editor will add a crossorigin="anonymous" attribute
            // importcss_append: true,
            ...content_style,

            font_formats:
              " Oswald; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
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
          onEditorChange={(newText) => onEditorChange(id,newText)} // An event handler for notifying when the editor is about to create an undo level, and preventing it if required.
          onInit={(evt, editor) => (editorRef.current = editor)} // An event handler for notifying when the editor has initialized.
          onDirty={() => setDirty(true)} // An event handler for notifying when the editor becomes dirty.
        //https://www.tiny.cloud/docs/integrations/react/#usingthetinymcereactcomponentasacontrolledcomponent
        // *** controlled component // https://www.tiny.cloud/docs/integrations/react/#usingthetinymcereactcomponentasacontrolledcomponent
        />
        <button name='submitbtn' onClick={save} disabled={!dirty}>
          Save
        </button>
      </form>
      {dirty && <p>You have unsaved content!</p>}
      <div className='innerHtml '>
        {innerHtml !== "" && (
          <div className='no-tailwindcss-base' dangerouslySetInnerHTML={{ __html: innerHtml }} />
        )}
      </div>
    </div>
  )
}

export default TinyMCE
