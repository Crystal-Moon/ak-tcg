import MainView from './MainView';

export function MainContainer(props) {
  const { lang } = props;
  return <MainView lang={lang} />;
}
