import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import ReactPlayer from 'react-player'


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Doce floress</title>
        <link rel="icon" href="/flowe.ico" />
      </Head>

        <p className={styles.title}>
            Doce floress
        </p>
      <main className={styles.main}>
        
       
      <div style={{ padding: 50}}>
          <p className={styles.msgPromo}>
          Embalando o Amor em buquês de chocolate</p>
        </div>
        
        <a 
          href="https://web.whatsapp.com/send?phone=5541985336174" 
          target="_blank">
          <p className={styles.msgPromo}>
            faça seu pedido | 41 98533-6174
          <WhatsAppIcon style={{marginLeft: 10}}htmlColor="#34af23"/>
          </p>
        </a>
 
        <div className={styles.grid}>

        <img src="/promocao.jpeg" alt="Promoção" className={styles.logoPromo} />


        <div style={{ padding: 50}}>
          <p className={styles.msgPromo}>
            Não espere uma data especial  para presentear quem você ama,
            surpreenda a pessoa amada com nossos lindos buquês</p>
        </div>

          <a className={styles.card}>
              <img src="/fotosd.jpeg" alt="Vercel Logo" className={styles.logo} />
              <p className={styles.description}>
              </p>
          </a>
          <a className={styles.card}>
            <ReactPlayer
                muted
                loop
                playing={true}
                width='100%'
                height=''
                url="/buque3.mp4"
            />
            <h3>Buquê Alegria </h3>
            <div>
              <p className={styles.description}>20 bombons outo branco</p>
              <p className={styles.description}>06 Girassóis</p>
              <p className={styles.description}>R$ 120,00</p>
            </div>
          </a>
          <a className={styles.card}>
            <img src="/buque4.jpeg" alt="Vercel Logo" className={styles.logo} />
            <h3>Buquê Pixão </h3>
            <div>
              <p className={styles.description}>20 Ferreiros</p>
              <p className={styles.description}>16 rosas</p>
              <p className={styles.description}>R$200,00</p>
            </div>
          </a>



          <div style={{ padding: 50}}>
            <p className={styles.msgPromo}>cada embalagem pedende da disponibilidade em estoque</p>
            <p className={styles.msgPromo}>manter produto sobre refrigeração</p>
            <p className={styles.msgPromo}>consumir em até 24 horas</p>
          </div>
      
          <a className={styles.card}>
            <img src="/buque.jpeg" alt="Vercel Logo" className={styles.logo} />
            <h3>Buquê Ternura </h3>
            <div>
              <p className={styles.description}>20 morangos banhados no chocolate</p>
              <p className={styles.description}>01 Ferreiro</p>
              <p className={styles.description}>03 rosas</p>
              <p className={styles.description}>R$150,00</p>
            </div>
          </a>
          <a className={styles.card}>
            <img src="/buque2.jpeg" alt="Vercel Logo" className={styles.logo} />
            <h3>Buquê Carisma </h3>
            <div>
              <p className={styles.description}>25 morangos banhados no chocolate</p>
              <p className={styles.description}>06 Ferreiro</p>
              <p className={styles.description}>01 rosa</p>
              <p className={styles.description}>R$180,00</p>
            </div>
          </a>
          <a className={styles.card}>
            <img src="/buque1.jpeg" alt="Vercel Logo" className={styles.logo} />
            <h3>Buquê Doce Amor </h3>
            <div>
              <p className={styles.description}>20 bombons</p>
              <p className={styles.description}>Ouro Branco</p>
              <p className={styles.description}>ou</p>
              <p className={styles.description}>Sonho de Valsa</p>
              <p className={styles.description}>R$180,00</p>
            </div>
          </a>

          <a className={styles.card}>
            <img src="/ovo4.jpeg" alt="Vercel Logo" className={styles.logo} />
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}Discovery ® Henrique Tiago Tyminski
          
        </a>
      </footer>
    </div>
  )
}
