import './less/root.less';

export async function setup() {
  const [{ createRoot }] = await Promise.all([import('react-dom/client')]);

  const app = (
    <div className="container">
      <h1>Hello, World!</h1>
    </div>
  );

  createRoot(document.getElementById('root')!).render(app);
}

window.MMImage.sayHello("Hello, I'am render process!");
