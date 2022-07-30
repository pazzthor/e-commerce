import { Layout } from 'antd'

import './App.css';
import Navbar from './components/home/Navbar';
import Sitecontainer from './components/main/Sitecontainer';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
        <Header style={{backgroundImage:'linear-gradient(to bottom right ,teal, yellow)'}}>
          <Navbar />
        </Header>
        <Content>
          <Sitecontainer />
        </Content>
        <Footer>

        </Footer>
    </Layout>
  );
}

export default App;
