import styles from './page.module.css'
import Navbar from './components/navbar'
import Section1 from './components/Section1'
import ServiceCard from './components/ServiceCard'




export default function Home() {

  return (
    <div>
      <Navbar />
      <Section1 />

      <div className='cards'>
      <ServiceCard
        title="Développement Web"
        description="Notre expertise se trouve dans le développement web, en concevant des sites web sur mesure qui capturent l'essence de votre entreprise."
        logoUrl="/globe 2.svg"
      />
      <ServiceCard
        title="Développement Mobile"
        description="On réalise des projets de développement mobile en concrétisant vos idées à travers des applications intuitives et percutantes."
        logoUrl="/mobile 2.svg"
      />
      <ServiceCard
        title="Développement Desktop"
        description="On fait du développement desktop pour créer des logiciels puissants qui répondent à vos exigences métier."
        logoUrl="/ordinateur 2.svg"
      />
      </div>
    </div>
  );
}
 