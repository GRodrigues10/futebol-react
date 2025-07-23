// Campeonatos.jsx
import Header from "../pages/header/Header.jsx";
import { CampeonatoStyles } from "./CampeonatosStyled.js";

export default function Campeonatos() {
  const campeonatos = [
  {
    nome: "Brasileirão Série A",
    descricao: `O Campeonato Brasileiro Série A, conhecido popularmente como Brasileirão, é a principal competição nacional de futebol no Brasil, oficialmente fundada em 1959. Com um formato atual de pontos corridos envolvendo 20 clubes, o torneio é reconhecido por sua alta competitividade, revelação de talentos e grandes rivalidades regionais e nacionais. Times como Flamengo, Palmeiras, Corinthians e São Paulo fazem parte da história da competição, que também serve como vitrine para jogadores que vão conquistar espaço no futebol internacional. Ao longo das décadas, o Brasileirão passou por diversas mudanças de formato e regulamentos, sempre mantendo sua relevância e popularidade entre torcedores e mídia. Além do aspecto esportivo, o campeonato tem enorme impacto social e cultural no país, sendo palco de festas, rivalidades e histórias que envolvem milhões de fãs de futebol em todo o território nacional.`,
  },
  {
    nome: "Premier League",
    descricao: `A Premier League foi fundada em 1992, quando os clubes da primeira divisão do futebol inglês decidiram se separar da Football League para criar uma liga mais lucrativa e globalmente atrativa. Desde então, a Premier League consolidou-se como uma das ligas mais populares, competitivas e financeiramente poderosas do mundo, atraindo os melhores jogadores e técnicos internacionais. Clubes históricos como Manchester United, Liverpool, Chelsea, Arsenal e Manchester City disputam intensamente o título em estádios sempre lotados, com uma atmosfera vibrante e apaixonada. Além do espetáculo esportivo, a liga é famosa por sua cobertura global, contratos milionários de direitos televisivos e por influenciar o modelo de gestão do futebol moderno. A Premier League é uma referência tanto para o futebol jogado quanto para a indústria do esporte, servindo como palco para grandes rivalidades e desenvolvimentos do jogo moderno no cenário mundial.`,
  },
  {
    nome: "Champions League",
    descricao: `A UEFA Champions League é o torneio de clubes mais prestigiado do futebol mundial, criado originalmente em 1955 sob o nome de Taça dos Clubes Campeões Europeus. A competição reúne os campeões e principais clubes das ligas europeias para disputar a cobiçada “Orelhuda”, troféu símbolo da supremacia continental. Com um formato que inclui fases de grupos e mata-mata, a Champions League é palco de partidas emocionantes, rivalidades históricas e grandes viradas. Times como Real Madrid, Barcelona, Bayern de Munique, Liverpool e Milan têm seu nome gravado na história do torneio. Além do prestígio esportivo, a Champions League representa enorme retorno financeiro, exposição global e reforça a marca de grandes clubes e jogadores no cenário internacional. O evento é assistido por milhões de pessoas no mundo inteiro, consolidando-se como um dos maiores espetáculos do futebol mundial e de todos os tempos.`,
  },
  {
    nome: "Copa Libertadores",
    descricao: `A Copa Libertadores da América, iniciada em 1960, é a principal competição continental de clubes da América do Sul. Considerada uma das competições mais apaixonantes e intensas do futebol mundial, reúne clubes de países como Brasil, Argentina, Uruguai, Colômbia e Chile, entre outros. A competição é marcada por jogos de alta rivalidade, com torcidas fervorosas, estádios lotados e disputas acirradas que geram grande emoção. Clubes lendários como Boca Juniors, River Plate, Santos e Flamengo já conquistaram o torneio, que também concede ao campeão uma vaga no Mundial de Clubes da FIFA. A Libertadores é um símbolo da identidade futebolística sul-americana e tem um papel cultural importante, refletindo a paixão pelo esporte na região, influenciando toda a cultura futebolística do continente e inspirando gerações.`,
  },
    {
    nome: "La Liga",
    descricao: `Fundada em 1929, a La Liga é a principal liga profissional de futebol da Espanha e uma das mais renomadas e competitivas do mundo. Conhecida pelo seu estilo técnico e ofensivo, a liga revelou grandes talentos e foi palco de histórias lendárias protagonizadas por clubes como Real Madrid e Barcelona, cujas rivalidades históricas transcendem o esporte. Jogadores como Lionel Messi, Cristiano Ronaldo e muitos outros marcaram época na competição. A La Liga também possui grande importância cultural e econômica na Espanha, atraindo milhões de espectadores globalmente, contribuindo para o desenvolvimento do futebol em nível mundial. A liga é considerada uma das maiores do planeta, com impacto significativo no cenário esportivo e social, influenciando outras competições e inspirando gerações de atletas e torcedores.`
    }
,
    {
  nome: "Bundesliga",
  descricao: `A Bundesliga, fundada em 1963, é a principal liga de futebol da Alemanha e reconhecida por sua alta organização, qualidade técnica e estádios sempre cheios. O Bayern de Munique domina historicamente a competição, mas clubes como Borussia Dortmund, Schalke 04, Bayer Leverkusen e RB Leipzig também têm grande importância no cenário nacional e internacional. A liga alemã é famosa por sua filosofia de formação de jovens talentos, gestão financeira responsável e por oferecer um espetáculo futebolístico com ritmo acelerado e torcida vibrante. A Bundesliga é referência em inovação, eficiência e sustentabilidade no futebol europeu, sendo um exemplo a ser seguido por outras ligas do continente. Além disso, sua influência vai além do campo, impactando a cultura esportiva e social da Alemanha, consolidando-se como uma das ligas mais respeitadas mundialmente, com grande base de fãs e um papel fundamental no desenvolvimento do futebol global.`
}

,
 {
  nome: "Ligue 1",
  descricao: `Estabelecida em 1932, a Ligue 1 é a principal liga francesa de futebol, que tem ganhado projeção internacional principalmente graças ao investimento maciço no Paris Saint-Germain. Além do PSG, clubes como Lyon, Marseille, Monaco e Nantes são tradicionais na competição, que tem uma rica história de rivalidades intensas e jogos emocionantes. A Ligue 1 é conhecida pela mistura de jogadores experientes e jovens talentos que emergem para o cenário mundial. A liga possui uma forte base tática e física, com times valorizando tanto a técnica quanto a força. Seu crescimento tem contribuído para o fortalecimento do futebol francês no cenário global, revelando atletas que brilham em outras ligas e competições internacionais, ajudando a elevar o nível do esporte e consolidando sua importância no futebol europeu e mundial. A Ligue 1 é também reconhecida pela sua infraestrutura moderna e pela paixão das torcidas presentes em estádios por toda a França.`
}

,
{
  nome: "Serie A (Itália)",
  descricao: `A Serie A, criada em 1898, é uma das ligas mais tradicionais e respeitadas do futebol mundial, conhecida por sua tática refinada, defesa sólida e organização exemplar. Clubes lendários como Juventus, Milan, Internazionale, Roma e Napoli têm protagonizado grandes conquistas nacionais e internacionais, deixando um legado histórico marcante. A liga italiana revelou inúmeros craques que brilharam em competições globais, sendo admirada pela paixão intensa das torcidas, rivalidades históricas e jogos equilibrados e estratégicos. A Serie A exerce grande influência no estilo e na cultura do futebol, sendo referência em disciplina tática, competitividade e inovação. Além disso, contribui significativamente para o desenvolvimento do esporte na Itália e ao redor do mundo, inspirando outras ligas e consolidando sua importância no cenário esportivo global.`
}

,
 {
  nome: "Saudi Pro League",
  descricao: `Nos últimos anos, a Saudi Pro League tem ganhado enorme visibilidade internacional graças aos investimentos bilionários que atraem jogadores consagrados mundialmente. A liga da Arábia Saudita busca se consolidar como um polo esportivo de alto nível, modernizando estádios, infraestrutura e promovendo o crescimento do futebol na região. A liga tem servido como uma plataforma para jogadores experientes e estrelas globais prolongarem suas carreiras, enquanto fortalece a presença do futebol no Oriente Médio, tornando-se um mercado cada vez mais relevante no cenário esportivo mundial. A Saudi Pro League tem também incentivado o desenvolvimento de talentos locais e promovido competições intensas que atraem torcedores e investidores, contribuindo para a popularização do esporte na região.`
}
,
  {
  nome: "Copa do Mundo",
  descricao: `Organizada pela FIFA desde 1930, a Copa do Mundo é o torneio mais prestigioso do futebol internacional, realizado a cada quatro anos e reunindo as melhores seleções do planeta. O evento transcende o esporte, influenciando cultura, política e economia em escala global. Ao longo das décadas, a Copa já revelou ícones como Pelé, Maradona e Messi, além de proporcionar momentos inesquecíveis que fazem parte da memória coletiva mundial, sendo uma verdadeira festa que mobiliza bilhões de pessoas e representa a maior celebração do futebol em nível mundial. A competição é marcada pela paixão dos fãs, rivalidades históricas, jogos emocionantes e pela busca do título máximo que simboliza a excelência no futebol global.`
}
,
];


  return (
    <>
      <Header />
      <CampeonatoStyles>
        {campeonatos.map((camp, index) => (
          <div key={index} className="box">
            <h1>{camp.nome}</h1>
            <p>{camp.descricao}</p>
          </div>
        ))}
      </CampeonatoStyles>
    </>
  );
}
