import React from "react";
import { isNodeActive } from "../blocks/Blocks";
import { toggleUnorderedList, useEditorKit } from "../../Index";
import { Action } from "../actions/Action";

export interface UnorderedListActionProps {
  children: JSX.Element;
}

export const UnorderedListAction = (props: UnorderedListActionProps) => {
  const { editor } = useEditorKit();
  const isActive = () => isNodeActive(editor, "unordered-list");
  const enabled = editor.isNodeSupported("orderer-list");
  const toggle = () => toggleUnorderedList(editor);
  return (
    <Action
      {...props}
      isActive={isActive}
      onMouseDown={toggle}
      disabled={!enabled}
    />
  );
};
