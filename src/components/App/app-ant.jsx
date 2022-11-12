import s from './index.module.css'
import { Layout, Row, Col, Typography } from 'antd'
import Table from '../Table/Table'

const { Header, Footer, Content } = Layout
const {Title} = Typography

function AppAnt() {
    return (
        <Layout>
            <Header className={s.header}>
                {/* <div className={s.headText}> */}
                Сайт создан в рамках обучения Frontend-разработе.
                Использованию библиотек React и AntDesing, для создания и фильтрации таблиц с динамическим отображением данных.
                {/* </div> */}
            </Header>

            <Content>
                <Row>
                    
                    <Col xs={24} md={{span: 16, offset: 4}}>
                    <Title className={s.headTab} level={4}>Таблица покемонов</Title>
                    <Table/>
                    </Col>


                </Row>
            </Content>

            <Footer>
                
            </Footer>
        </Layout>

    )

}


export default AppAnt;
























// import logo from './logo.svg';
// import './App.css';
// import Post from './Post/Post';

// const post2 = {
//   autor:'Grirori',
//   date:'10.11.22',
//   content:'Learn React',
//   raz:<span>Колотить заколачивать</span>
// }

// function App() {
//   return (
//     <>
//     <div className="wrapper">
//       <div className="App App-logo">
//         Hello, world!
//       </div>
//     </div>
//       <Post {...post2}/>

//       <Post {...post2}>fish</Post>
//       </>
//   );
// }

// export default App;
