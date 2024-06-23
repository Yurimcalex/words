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
	'turn down': 'уменьшить (громкость); отказывать, отклонять (кто-то что-то предлагает)',
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
	'empty out': 'опустошать',
	'fill up': 'напалнять',
	'put up with': 'терпеть что-то',
	'tolerate': 'терпеть когда что-то не нравится',
	'think through': 'подумывать, обдумывать',
	'contemplate': 'рассуждать, обдумывать',
	'wrap up': 'сворачивать, завершать (как оканчивать)',
	'take in': 'обрабатывать (много инфы - нужно много подумать)',
	'process': 'пропускать через себя, слишком много думать',
	'turn in': 'здать, отдать, подать (кому-то что-то)',
	'submit': 'подавать, отправлять',
	'stick around': 'оставаться с кем-то',
	'pull over': 'останавливаться (на автомобиле)',
	'give in': 'уступать',
	'give up': 'бросить делать что-то (курить)',
	'quit': 'бросать, переставать (делать какую-то деятельность)',
	'figure out': 'разбираться в чем-то, выяснить',
	'pass on': 'передавать',
	'transmit': 'передавать',
	'start up': 'запускать, начинать',
	'initiate': 'инициировать, что-то начинать',
	'use up': 'израсходовать',
	'deplete': 'истощать, использовать что-то до самого конца',
	'find out': 'выяснять, разузнать',
	'investigate': 'расследовать',
	'take on': 'начинать',
	'call off': 'отзывать, отменять',
	'cancel': 'отменять',
	'carry out': 'выполнять, добиться',
	'accomplish': 'достигать, добиваться',
	'roll over': 'перекатываться, переворачиваться га другую сторону',
	'bend over': 'наклониться (напр. что-бы что-то поднять)',
	'tear up': 'плакать (но не рыдать просто что-то тронуло)',
	'show off': 'выставлять на показ, выпендриваться',
	'set up': 'подставлять кого-то',
	'jod down': 'быстренько что-то записать',
	'pull off': 'успешно что-то сделать',
	'pass away': 'умереть',
	'make up for': 'возмещать',
	'lay off': 'отпустить работника, уволить',
	'knock out': 'вырубать',
	'hold back': 'сдерживаться (когда кто-то кричит, эмоции сдерживать)',
	'hand in': 'сдавать (отчет по работе)',
	'go over': 'пересматривать, просматривать еще раз (напр. условие контракта, правила игры)',
	'fall apart': 'разваливаться',
	'fall through': 'не получаться (планы)',
	'roll down': 'опускать окно',
	'honk': 'сигналить (пипикать)',
	'signal': 'сигнализировать',
	'brake': 'тормозить (автомобиль)',
	'accelerate': 'ускоряться, разгоняться',
	'start': 'запустить двигатель',
	'adjust': 'регулировать',
	'buckle': 'пристегнуться',
	'fling off': 'отбросить (одеяло)',
	'lean against': 'прислониться, облокотиться',
	'oversleep': 'заспать',
	'toss and turn': 'ворочаться в кровати',
};

let words = { ...verbs };

console.log(Object.keys(words).length);

search.oninput = function (e) {
	let input = e.target.value;
	if (input in words) {
		data.innerHTML = `${input}: ${words[input]}`;
	} else {
		data.innerHTML = '';
	}
}