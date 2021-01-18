import { EditorState, EditorSelection, Transaction } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { PostgreSQL, sql } from "@codemirror/lang-sql";
import { basicSetup } from "@codemirror/basic-setup";

const extensions = [
  basicSetup,
  sql({ dialect: PostgreSQL, upperCaseKeywords: true }),
];

const initialState = EditorState.create({
  doc: "",
  extensions,
});

const view = new EditorView({
  parent: document.querySelector("#editor"),
  state: initialState,
});
