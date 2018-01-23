import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Accordion, AccordionItem } from 'react-sanfona';
import { Container, Row, Col } from '../Grid/Grid'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Testimonial from '../Testimonial/Testimonial'
import Footer from '../Footer/Footer'
import styles from './faq.css'

const Faq = props => {
  return (
    <div>
      <Header />

      <Menu />

      <section className={styles.content}>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className={styles.title}>Encontre respostas rápidas para as principais dúvidas</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={10} offset={{ sm: 1 }}>
              <Accordion>
                <AccordionItem title={'DÚVIDAS SOBRE O CONSÓRCIO'}>
                  <div>
                    <p className={"question"}>1) O que é consórcio?</p>
                    <p className={"answer"}>Consórcio é a união de pessoas físicas e/ou jurídicas que se reúnem com a finalidade de adquirir um bem por meio de autofinanciamento. Os participantes adquirem uma cota e pagam prestações mensais, gerando recursos para a contemplação dos consorciados, que ocorrem por meio de sorteios e, se houver saldo de caixa, por lances. Ao final do prazo do grupo, todos os participantes terão recebido a sua carta de crédito.</p>

                    <p className={"question"}>2) Qual o papel da Administradora de consórcios?</p>
                    <p className={"answer"}>Formar e administrar grupos de consórcios zelando pelos interesses dos consorciados e garantindo a aplicação das regras aos integrantes do grupo.</p>

                    <p className={"question"}>3) O que é grupo e cota?</p>
                    <p className={"answer"}>Grupo é um conjunto autônomo de pessoas com objetivos em comum, tendo como base para agrupamento, o prazo e o valor dos bens, que devem ser compatíveis entre os membros. Cada grupo possui um número determinado de cotas e a cota é um número de identificação com o qual o consorciado participa nos sorteios.</p>

                    <p className={"question"}>4) Quem é responsável pela regulamentação/fiscalização dos Consórcios?</p>
                    <p className={"answer"}>As normas, regulamentos e fiscalização do Sistema de Consórcio estão sob a responsabilidade do Banco Central do Brasil, regulador do sistema desde 1992.</p>

                    <p className={"question"}>5) Como é composta a prestação de consórcio?</p>
                    <p className={"answer"}>Cada prestação mensal é composta pela soma de percentuais do fundo comum, da taxa de administração, fundo de reserva e seguro prestamista (caso cliente faça opção pelo seguro).</p>

                    <p className={"question"}>6) O que é Taxa de Administração?</p>
                    <p className={"answer"}>A taxa de administração corresponde a remuneração da Administradora pela formação, organização e administração do grupo de consórcio, paga pelo Consorciado. Esta taxa é dividida pelo prazo de duração do grupo, ou seja, é diluída nas prestações mensais.</p>

                    <p className={"question"}>7) O que é Fundo Comum?</p>
                    <p className={"answer"}>São os recursos do Grupo destinados à atribuição de crédito aos Consorciados contemplados para a aquisição do bem e à restituição aos consorciados excluídos dos respectivos Grupos, bem como para outros pagamentos previstos no Contrato de Adesão.</p>

                    <p className={"question"}>8) O que é Fundo de Reserva?</p>
                    <p className={"answer"}>São recursos recolhidos, mensalmente, pelos Consorciados em favor do grupo para uma eventual insuficiência de receita, de forma a permitir a distribuição por sorteio ou lance de, no mínimo, um bem. Na maioria dos grupos, atualmente, o fundo de reserva é destinado para a cobertura do Seguro de Quebra de Garantia.</p>

                    <p className={"question"}>9) O que é Seguro de Quebra de Garantia?</p>
                    <p className={"answer"}>É o seguro que garante que a arrecadação do grupo não seja prejudicada por eventuais inadimplências de consorciados contemplados. A seguradora paga pelos atrasados, o que permite ao grupo entregar os demais bens normalmente.</p>

                    <p className={"question"}>10) O que é Seguro Prestamista?</p>
                    <p className={"answer"}>O Seguro Prestamista garante tranquilidade e segurança ao consorciado e a sua família assegurando, nos termos contratados, o cumprimento da obrigação assumida pelo consorciado em caso de morte ou invalidez total por acidente. Em caso de sinistro, o consorciado deverá estar com suas prestações em dia para ter direito a cobertura do Seguro Prestamista.</p>

                    <p className={"question"}>11) O que é assembleia Geral Ordinária?</p>
                    <p className={"answer"}>É a reunião realizada para a apreciação de contas prestadas pela Administradora e a realização de contemplações, via sorteios ou lances.</p>
                  </div>
                </AccordionItem>
                <AccordionItem title={'CONTRATAÇÃO / ADESÃO DE GRUPOS'}>
                  <div>
                    <p className={"question"}>1) Existe uma quantidade mínima de pessoas para a inauguração do Grupo?</p>
                    <p className={"answer"}>Não. O grupo poderá ser inaugurado quando o valor arrecadado no fundo comum for suficiente para a entrega do bem de maior valor.</p>

                    <p className={"question"}>2) Como receberei informações sobre meu plano de consórcio?</p>
                    <p className={"answer"}>Após a confirmação do pagamento da primeira prestação, o consorciado receberá a confirmação de sua adesão ao grupo de Consórcio por meio do Kit Boas Vindas. E além disso, assim que a quantidade de cotas para inauguração do grupo estiver completa, a Administradora enviará a Carta de Convocação para a Assembleia Inaugural. As informações sobre a cota, sorteios, lances, entre outros, podem ser verificadas no Internet Banking ou Central de Atendimento ao Consorciado.</p>
                  </div>
                </AccordionItem>
                <AccordionItem title={'CONTEMPLAÇÃO / UTILIZAÇÃO DO CRÉDITO'}>
                  <div>
                    <p className={"question"}>1) O que é contemplação?</p>
                    <p className={"answer"}>É a atribuição ao consorciado de adquirir o bem por meio da utilização da carta de crédito.</p>

                    <p className={"question"}>2) Como posso ser contemplado?</p>
                    <p className={"answer"}>A contemplação poderá ser por meio do sorteio ou lance vencedor na assembleia Ordinária de seu grupo.</p>

                    <p className={"question"}>3) Quantos bens serão entregues em cada assembleia?</p>
                    <p className={"answer"}>As contemplações são efetuadas de acordo com o saldo do grupo. A prioridade é o sorteio e havendo saldo remanescente, este será utilizado para as demais contemplações via lances, de acordo com o saldo do grupo.</p>

                    <p className={"question"}>4) Se eu quitar a cota eu sou contemplado?</p>
                    <p className={"answer"}>A quitação da cota não garante a contemplação. A contemplação é por lance ou sorteio.</p>

                    <p className={"question"}>5) Como funciona a apuração do sorteio pela loteria federal?</p>
                    <p className={"answer"}>Cada cota do grupo receberá uma mesma quantidade de combinações para concorrer aos sorteios, utilizando-se como base a extração do Resultado da Loteria Federal, imediatamente anterior à data prevista para a realização da assembleia. São utilizadas as extrações do 1º ao 5º prêmio, conforme a quantidade de participantes de cada grupo. Se o número encontrado não corresponder a uma cota válida, será verificado o próximo número da Loteria Federal até que seja localizada uma cota apta à participação na assembleia.</p>

                    <p className={"question"}>6) Se estiver em atraso, participo dos sorteios e/ou posso ofertar lance?</p>
                    <p className={"answer"}>Não. Para concorrer a contemplação o consorciado deverá estar em dia com suas obrigações até a data do vencimento da respectiva prestação. Se estiver inadimplente, não participará da apuração do sorteio, até que restabeleça seus pagamentos.</p>

                    <p className={"question"}>7) Como faço para ofertar um lance?</p>
                    <p className={"answer"}>Os lances podem ser ofertados até as 18h do dia que antecede a data da assembleia. A oferta pode ser feita no IB Santander, no portal Consórcio www.santander.com.br/consorcio ou diretamente no local, data e hora de realização da assembleia.</p>

                    <p className={"question"}>8) Qual o percentual mínimo e máximo para lances?</p>
                    <p className={"answer"}>O valor mínimo de oferta do lance é de 10% do valor da carta de crédito, acrescido dos percentuais do fundo de reserva e taxa de administração. O lance máximo que pode ser ofertado pelo cliente deve ser o valor correspondente ao percentual total do saldo devedor. Por exemplo, o cliente já pagou 50% de sua cota, portanto, o lance máximo que poderá ofertar deverá ser de 50%.espostas</p>

                    <p className={"question"}>9) Como funciona a apuração do lance vencedor?</p>
                    <p className={"answer"}>Será considerado vencedor o lance que representar o maior percentual em relação ao valor do bem, acrescido dos percentuais do fundo de reserva e taxa de administração. Em caso de empate entre os lances, o desempate será resolvido tomando-se como base a aproximação do número da cota sorteada. Assim, será considerada vencedora a cota que estiver mais próxima, em ordem crescente, da cota sorteada no 1º prêmio da Loteria Federal.</p>

                    <p className={"question"}>10) Quais as formas de ofertar um lance?</p>
                    <p className={"answer"}>O cliente pode realizar um lance por meio de recursos próprios ou lance embutido, onde é permitido utilizar até 30% da própria carta de crédito para pagamento. Ideal para o cliente que não tenha dinheiro nas mãos. Ainda é possível combinar os lances (recursos próprios e embutido). Caso o cliente seja contemplado, deverá informar a Central de Atendimento que se trata de lance embutido. Exemplo: o Cliente adquiriu uma carta de R$ 50 mil e oferta o lance embutido de 30%. O cliente receberá o crédito de R$ 35 mil.</p>

                    <p className={"question"}>11) Onde consigo ver o resultado da última assembleia do meu grupo?</p>
                    <p className={"answer"}>O resultado da última assembleia pode ser visto no Demonstrativo do Consorciado que é enviado mensalmente por correio. Também poderá ser visto, imediatamente após a realização da assembleia, no Internet Banking www.santander.com.br e na Central de Atendimento.</p>

                    <p className={"question"}>12) Como devo proceder após a contemplação?</p>
                    <p className={"answer"}>Após a contemplação, a administradora encaminhará para o endereço de correspondência do consorciado e o Aviso de Contemplação com todas as orientações e procedimentos. As orientações também estão disponível no site do Santander: www.santander.com.br > Consórcio.</p>

                    <p className={"question"}>13) Se eu ofertar um lance e não for contemplado tenho que pagá-lo mesmo assim?</p>
                    <p className={"answer"}>Somente os lances vencedores deverão ser pagos. Os demais lances serão cancelados e poderão ser feitas novas ofertas na (s) assembleias seguintes.</p>

                    <p className={"question"}>14) Sendo contemplado, de que forma efetuo o pagamento do lance?</p>
                    <p className={"answer"}>Após a realização da assembleia, os lances vencedores, deverão ser quitados em até 8 dias corridos, considerando a data da realização da respectiva AGO (Assembleia Geral Ordinária) de Contemplação da cota. O Consorciado receberá o boleto no endereço cadastrado e também poderá obtê-lo através do Internet Banking ou Central de Atendimento.</p>

                    <p className={"question"}>15) De que forma o lance pago é amortizado no saldo devedor da cota?</p>
                    <p className={"answer"}>O lance quitará prestações na ordem inversa, ou seja, das últimas para as iniciais. Também é permitido reduzir o valor das prestações mensais, nesse caso, é necessário solicitar o Lance Diluído na Central de Atendimento.</p>

                    <p className={"question"}>16) Há um prazo definido para utilização da carta de crédito, após a contemplação?</p>
                    <p className={"answer"}>Não, A aquisição do bem poderá ser feita até a última assembleia, entretanto o crédito contemplado não sofrerá os possíveis reajustes que o bem possa ter, porém permanecerá aplicado em um fundo de investimentos até a sua utilização.</p>

                    <p className={"question"}>17) Depois da contemplação, em quanto tempo ocorre a liberação ao vendedor?</p>
                    <p className={"answer"}>Após o parecer positivo da área de riscos o cliente deverá apresentar a documentação (formulários disponíveis no site > Consórcio) e mediante análise dos documentos o pagamento ao vendedor ocorre em até 03 dias úteis.</p>

                    <p className={"question"}>18) Possuo um consórcio contemplado, utilizei a carta e sobrou um saldo, este valor é reembolsado somente após a quitação da carta?</p>
                    <p className={"answer"}>Após utilização do crédito para aquisição do bem, se houver sobra poderá ser utilizado para abater as parcelas na ordem inversa, utilizar até 10% para reembolso de despesas como despachante, licenciamento, despesas de registro ou devolução em espécie, caso a cota esteja quitada.</p>

                    <p className={"question"}>19) Quais os bens que posso comprar após a contemplação?</p>
                    <p className={"answer"}>Automóveis, caminhões e ônibus novos ou usados com até 10 anos de uso; Motos novas ou usadas com até 5 anos de uso (exceto moto-trilha, pois não permite alienação já que não possui emplacamento).</p>

                    <p className={"question"}>20) Posso retirar o meu crédito em espécie?</p>
                    <p className={"answer"}>Sim, o crédito poderá ser retirado em espécie, desde que a cota esteja quitada e contemplada há mais de 180 dias.</p>

                    <p className={"question"}>21) Tenho duas cotas, fui contemplado (a) em uma. Posso faturar um bem e utilizar as duas cotas?</p>
                    <p className={"answer"}>Não, neste caso se a intenção for junção de cotas, ou seja, juntar os dois valores de crédito para compra de um bem,será necessário a contemplação das duas cotas.</p>

                    <p className={"question"}>22) Fui contemplado (a) posso adquirir 2 bens com o crédito que possuo?</p>
                    <p className={"answer"}>Sim, se houver necessidade de pagar a diferença poderá ser feito com recursos próprios.</p>

                    <p className={"question"}>23) Possuo um CDC ativo. Pposso utilizar carta do consórcio para liquidar este bem?</p>
                    <p className={"answer"}>Sim, após a contemplação é possível desde que o valor da carta de crédito seja igual ou superior ao saldo devedor do bem. Importante ressaltar que o CDC pode ser interno ou do mercado.</p>

                    <p className={"question"}>24) Possuo um leasing ativo, posso utilizar carta do consórcio para liquidar este bem ?</p>
                    <p className={"answer"}>Não, apenas para quitação de financiamento.</p>
                  </div>
                </AccordionItem>
                <AccordionItem title={'MANUTENÇÃO DA COTA'}>
                  <div>
                    <p className={"question"}>1) Qual impacto se houver atraso no pagamento das parcelas?</p>
                    <p className={"answer"}>O cliente não contemplado, caso atrase suas parcelas, não estará apto para concorrer nas Assembleias mensais até que regularize suas contribuições, podendo ainda ter sua cota cancelada se permanecer com três parcelas em aberto.</p>

                    <p className={"question"}>2) É permitido realizar uma antecipação do pagamento de prestações?</p>
                    <p className={"answer"}>Sim. O consorciado pode antecipar o pagamento de quantas parcelas desejar e a qualquer momento, através dos canais de atendimento disponíveis. A antecipação amortizará parcelas na ordem inversa dos vencimentos, isto é, das últimas para as primeiras. A antecipação não será considerada como lance.</p>

                    <p className={"question"}>3) Sou funcionário do Grupo e pago um percentual menor de taxa de administração, em caso de desligamento, a taxa reduzida será mantida?</p>
                    <p className={"answer"}>Sim, a condição será mantida.</p>

                    <p className={"question"}>4) Fui contemplado, já estou de posse do bem, mas gostaria de trocá-lo, é possível?</p>
                    <p className={"answer"}>Sim. Este processo é chamado de “Substituição de Garantia”. Após aprovação por parte da Administradora sobre a garantia do novo bem, o antigo será liberado (baixa da alienação) e o novo bem será alienado a favor da Administradora. Caso o valor do novo bem seja superior, a diferença deverá ser paga com recursos próprios.</p>

                    <p className={"question"}>5) É possível a transferência da cota?</p>
                    <p className={"answer"}>Sim, a transferência de titularidade é realizada após análise prévia da Administradora e envio dos documentos e formulários necessários.</p>

                    <p className={"question"}>6) Como ocorre o reajuste de preço do crédito/parcelas?</p>
                    <p className={"answer"}>No caso de veículos, o reajuste pode ser mensal se houver alteração na tabela da montadora.</p>

                    <p className={"question"}>7) Em caso de falecimento, o seguro que contratei no ato da adesão quita o saldo devedor da minha cota?</p>
                    <p className={"answer"}>Em caso de falecimento, após análise da documentação solicitada pela Seguradora, se for favorável a indenização, a Seguradora efetuará o pagamento para Administradora, caso a cota não esteja contemplada a Administradora ofertará um lance (do valor recebido) e não ocorrendo a contemplação a administradora quitará a cota do consorciado e será necessário aguardar o sorteio da cota para então o crédito ser pago ao(s) herdeiro(s).</p>
                  </div>
                </AccordionItem>
                <AccordionItem title={'ENCERRAMENTO DO GRUPO'}>
                  <div>
                    <p className={"question"}>1) O que é consorciado excluído?</p>
                    <p className={"answer"}>O consorciado não contemplado que deixar de efetuar o pagamento de três ou mais prestações mensais consecutivas ou alternadas ou de montante equivalente, será considerado inadimplente, o Consorciado não contemplado que solicitar sua desistência ao Grupo, será considerado desistente. O desistente e o inadimplente serão considerados Consorciados Excluídos.</p>

                    <p className={"question"}>2) Adquiri uma cota e desisti de pagar, em qual momento serei restituído dos valores que paguei?</p>
                    <p className={"answer"}>A restituição das prestações pagas para Consorciados não contemplados desistentes ou excluídos por inadimplência ocorre após a contemplação da cota através de Sorteio na Assembleia dos Excluídos. Neste sorteio é considerado somente o 1º prêmio da Loteria Federal e, caso não seja sorteado até a última Assembleia do grupo os valores pagos serão restituídos somente após o encerramento do grupo.</p>

                    <p className={"question"}>3) Qual a multa aplicada para os casos de desistência/inadimplência?</p>
                    <p className={"answer"}>A multa será de 20% em relação ao percentual amortizado até a última assembleia, sendo 10% em benefício do grupo e 10% em benefício da administradora.</p>

                    <p className={"question"}>4) Como é feita o pagamento do saldo remanescente no grupo aos consorciados?</p>
                    <p className={"answer"}>Havendo sobra do Fundo de Reserva, será feito o rateio do valor entre todos os participantes ativos em até 60 dias após a realização da última Assembleia do grupo.</p>
                  </div>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <Testimonial type={'o_que_eh'} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Faq)