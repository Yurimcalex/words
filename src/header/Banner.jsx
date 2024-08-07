export default function Banner({ theme }) {
	return (
		<div className={`banner ${theme}-2`}>
		  <div className="square w">W</div>
		  <div className="square o down">O</div>
		  <div className="square r">R</div>
		  <div className="square d down">D</div>
		  <div className="square s">S</div>
		</div>
	);
}