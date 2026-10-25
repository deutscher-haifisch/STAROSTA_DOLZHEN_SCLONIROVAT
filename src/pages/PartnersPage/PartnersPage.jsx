import Partner from '../../components/Partner/Partner'

function PartnersPage() {
  return (
    <section className="section">
      <h1 className="section-title">Партнеры</h1>
      <div className="grid">
        <Partner
          name="ICL"
          logo="/partners/icl.png"
          link="https://icl.ru"
          description="ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов, решений и продуктов. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС)."
        />
        <Partner
          name="Татнефть"
          logo="/partners/tatneft.png"
          link="https://www.tatneft.ru"
          description="«Татнефть» — одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур."
        />
      </div>
    </section>
  )
}

export default PartnersPage
