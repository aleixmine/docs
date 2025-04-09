import { Editor as MonacoEditor, type Monaco } from '@monaco-editor/react';
import { wireTmGrammars } from 'monaco-editor-textmate';
import { Registry } from 'monaco-textmate';
import { loadWASM } from 'onigasm';

export default function CodeEditor() {
  function handleEditorBeforeMount(monaco: Monaco) {
    Promise.all([
      fetch("data/GlassAPI.d.ts").then(res => res.text()),
      fetch("data/ModAPI.d.ts").then(res => res.text()),
      fetch(`data/OneDark-Pro-flat.json`).then(res => res.json()),
      (new FontFace('CascadiaCode NF', 'url(data/CascadiaCodeNF.ttf)')).load().then((loadedFace) => {
        document.fonts.add(loadedFace);
      })
    ]).then(([glassAPI, modAPI, theme]) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(glassAPI, "@types/GlassAPI.d.ts");
      monaco.languages.typescript.typescriptDefaults.addExtraLib(modAPI, "@types/ModAPI.d.ts");
      monaco.editor.defineTheme('test', theme)
      monaco.editor.setTheme("test")
    });
    
  }

  async function mounting(editor:any, monaco: Monaco){
    await loadWASM(`data/onigasm.wasm`) // See https://www.npmjs.com/package/onigasm#light-it-up

    const registry = new Registry({
        getGrammarDefinition: async (scopeName) => {
            return {
                format: 'json',
                content: await (await fetch(`data/TypeScript.tmLanguage.json`)).text()
            }
        }
    })
    const grammars = new Map()
    grammars.set('css', 'source.css')
    grammars.set('html', 'text.html.basic')
    grammars.set('typescript', 'source.ts')
    
    await wireTmGrammars(monaco, registry, grammars, editor)
  }
  

  return <MonacoEditor
    height="90vh"
    defaultValue=""
    language="typescript"
    theme="vs-dark"
    options={{
      fontFamily: "CascadiaCode NF",
      fontLigatures: true
    }}
    onMount={mounting}
    beforeMount={handleEditorBeforeMount} />
}