import Bar from "./bar/Bar"

function TopInfo() {
  return (
    <div className="top_info_container">
      <Bar
        width="59%"
        currentValue={10}
        maxValue={100}
        backgroundColor="#073c13"
        barColor="#03b82d"
        textColor="#fff"
        animationColor='#f00'
      />
      <Bar
        width="39%"
        currentValue={10}
        maxValue={100}
        backgroundColor="#a35c1e"
        barColor="#fc8b2b"
        textColor="#fff"
      />
    </div>
  )
}

export default TopInfo