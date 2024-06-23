let verbs = {
	'fix up': 'исправить, починить',
	'botch up': 'испортить, поломать',
	'goof off': 'бездельничать',
	'jerk off': 'бездельничать',
	'beaver away': 'трудиться не покладая рук',
	'agree with': 'соглашаться',
	'quarrel out': 'ссориться',
	'let go': 'отпустить',
	'take hold of': 'ухватиться за',
	'be bad at': 'не преуспевать, отставать',
	'be good at': 'преуспевать',
	'praise for': 'похвалить',
	'call down': 'сделать выговор',
	'speak up': 'высказываться',
	'shut up': 'замолчать',
	'come to': 'прийти в сознание',
	'pass out': 'потерять сознание',
	'cheer up': 'повеселеть',
	'eat out': 'поесть вне дома',
	'bring down': 'приуныть',
	'eat in': 'есть дома',
	'take apart': 'разбирать на части',
	'put together': 'собирать (пазл)',
	'slow down': 'замедлять',
	'speed up': 'ускориться',
	'turn down': 'уменьшить (громкость)',
	'turn up': 'увеличить (громкость)',
	'come back': 'возвращаться',
	'go away': 'уходить',
	'turn off': 'выключать',
	'turn on': 'включать',
	'check out': 'вырегистрироваться',
	'check in': 'регистрироваться',
	'take out': 'выносить',
	'bring in': 'приносить',
	'touch down': 'приземлиться',
	'take off': 'снимать, взлетать',
	'put on': 'надевать',
	'get off': 'слезать, слезать с автобуса',
	'get on': 'садиться',
	'get out': 'вылезать',
	'get in': 'залезать',
	'tidy up': 'прибраться',
	'mess up': 'навести беспорядок',
	'wake up': 'проснуться',
	'hang up': 'вешать трубку',
	'drop off': 'высадиться',
	'put down': 'положить',
	'pick up': 'подобрать',
};

let words = { ...verbs };

search.oninput = function (e) {
	let input = e.target.value;
	if (input in words) {
		data.innerHTML = `${input}: ${words[input]}`;
	} else {
		data.innerHTML = '';
	}
}