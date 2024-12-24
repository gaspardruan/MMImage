import { Card, HTMLTable, Overlay2 } from '@blueprintjs/core';

interface HelpPanelProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const HelpPanel = ({ isOpen, setIsOpen }: HelpPanelProps) => {
  return (
    <Overlay2
      className="hotkey-modal-wrapper"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      transitionDuration={150}
    >
      <Card className="hotkey-modal">
        <h2>快捷键</h2>
        <HTMLTable className="hotkey-table" bordered={true}>
          <thead>
            <tr>
              <th>功能</th>
              <th>快捷键</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>上一张</td>
              <td>←</td>
            </tr>
            <tr>
              <td>下一张</td>
              <td>→</td>
            </tr>
            <tr>
              <td>退回</td>
              <td>Esc</td>
            </tr>
            <tr>
              <td>全屏切换</td>
              <td>F11</td>
            </tr>
          </tbody>
        </HTMLTable>
      </Card>
    </Overlay2>
  );
};
