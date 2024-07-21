const verbs = {
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
	'give up': 'бросить делать что-то (курить); здаваться',
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
	'snore': 'хропеть',
	'lie down': 'лечь',
	'go to bed': 'ложиться спать',
	'yawn': 'зевать',
	'stretch': 'вытягивать, потягиваться; растягиваться (делать разтяжку)',
	'scroll through': 'пролистывать',
	'schedule': 'запланировать, назначить',
	'reply to': 'ответить на (сообщение)',
	'grate': 'натирать',
	'fish out': 'выловить',
	'crack': 'разбить, взломать, треснуть',
	'scrape': 'царапать, выскрезти',
	'spread': 'намазывать, распостранять',
	'toast': 'поджаривать',
	'stir': 'размешивать, помешивать',
	'squeeze': 'выжимать',
	'add': 'добавлять (что-то к чему-то)',
	'pour': 'налить',
	'thank': 'благодарить',
	'convince': 'убеждать',
	'chat': 'болтать',
	'greet': 'приветствовать',
	'bonk on': 'ударять',
	'doze': 'дремать',
	'look for': 'искать',
	'chill': 'отдыхать, расслабляться',
	'recognize': 'осознать, расознать, признать',
	'answer': 'отвечать (на вопрос, на конкретику)',
	'better': 'улучшать',
	'improve': 'улучшать',
	'drop': 'уронить',
	'throw': 'кидать, бросать (целенаправленно)',
	'keep': 'сохранить (какую-то вещь); оставить себе',
	'save': 'сохранять; спасать; копить, экономить',
	'comprehend': 'уразуметь, осмыслять, понимать всецело, постигнуть',
	'understand': 'понимать',
	'choose': 'выбирать',
	'select': 'выбирать',
	'debate': 'спорить (более уважительно)',
	'argue': 'спорить, ругаться',
	'represent': 'представлять (как представитель)',
	'stand for': 'представлять (как относиться к чему-то)',
	'defend': 'защищать, обосновывать свою позицию',
	'explain': 'обьяснять',
	'spend': 'потратить',
	'pay': 'заплатить',
	'reach': 'достичь какого-то места, дотянуться до чего-то; обратиться к кому-то',
	'arrive': 'прибывать',
	'create': 'создавать',
	'develop': 'разрабатывать; развиваться как',
	'achieve': 'достигать (что-то конкретное)',
	'win': 'выиграть; преуспеть',
	'fall': 'падать',
	'collapse': 'рухнуть',
	'lose': 'терять, проиграть',
	'sit': 'сидеть',
	'remain': 'оставаться',
	'talk': 'разговаривать, говорить, беседовать',
	'meet': 'встретиться',
	'face': 'столкнуться (лицом к лицу, если что-то неприятное)',
	'include': 'включать, добавлять (кого-то куда-то)',
	'play': 'играть',
	'act': 'действовать, поступать',
	'assist': 'помогать, ассистировать',
	'help': 'помогать',
	'twist': 'крутить, выкручивать',
	'turn': 'поворачивать, повернуть',
	'hold': 'удерживать; придерживать, держаться (за руку)',
	'show': 'показывать',
	'demonstrate': 'демонстрировать',
	'experience': 'испытывать (эмоции)',
	'feel': 'чувствовать',
	'leave': 'уходить',
	'escape': 'збегать',
	'find': 'находить',
	'discower': 'обнаружить, открвть',
	'provide': 'предоставлять, предоставлять что-то',
	'give': 'давать',
	'mention': 'упоминуть',
	'say': 'сказать',
	'contact': 'связаться с кем-то',
	'prefer': 'предпочитать',
	'order': 'заказывать',
	'request': 'запрашивать',
	'take': 'взять',
	'adopt': 'перенять что-то откуда-то',
	'realize': 'понимать (ситуацию)',
	'respond': 'отвечать (просто)',
	'deny': 'отрицать',
	'refuse': 'отказаться',
	'change': 'изменить',
	'replace': 'заменить',
	'enter': 'вступать во что-то, входить (в здание)',
	'enroll': 'записаться на что-то',
	'serve': 'служить кому-то',
	'grow': 'выращивать',
	'pass': 'проходить мимо чего-то, проходить (тест, какой-то отбор)',
	'suggest': 'предлагать, подсказывать как делать',
	'advocate': 'выступать за',
	'offer': 'предлагать (более официально, конкретные вещи)',
	'propose': 'предлагать (идея, замужество, более абстрактные вещи)',
	'happen': 'случаться (более кажднодневное)',
	'occur': 'случаться',
	'compensate': 'заплатить за какие-то неудобства, компенсировать',
	'pursue': 'гнаться (за кем-то, за чем-то)',
	'follow': 'следовать',
	'solve': 'решать',
	'resolve': 'разрешать',
	'split': 'разьеденять, разбивать на составляющие; расходится',
	'separate': 'разьеденять',
	'gather': 'собирать (людей)',
	'collect': 'собирать (оставлять себе)',
	'succeed': 'достигать успеха в чем-то',
	'fold': 'складывать, перегибать (бумагу пополам)',
	'lead': 'вести (указывая путь); руководить',
	'drown': 'тонуть',
	'knock': 'стучаться',
	'carry': 'нести; возить',
	'tear': 'рвать, разрывать, срывать',
	'smash': 'размозжить, разгромить, сокрушить',
	'nod': 'кивать (головой)',
	'shout': 'кричать, накричать',
	'scream': 'вскрикнуть, орать, зареветь',
	'pluck': 'срывать, ощипывать',
	'grasp': 'схватить, хвататься; понять, осознать',
	'peel': 'чистить (кожуру)',
	'divide': 'разделять, подразделять',
	'step': 'шагать, ступать',
	'flick': 'щелкнуть, слегка ударить(щелбан)',
	'travel': 'путишествовать',
	'motivate': 'мотивировать',
	'miss': 'пропустить (автобус), упускать, прозевать; скучать; промахнуться',
	'wave': 'махать, взмахнуть',
	'call': 'звонить (по телефону); называть (имя чье-то)',
	'relax': 'расслабляться',
	'hate': 'ненавидеть',
	'celebrate': 'праздновать, справлять, отмечать',
	'feed': 'кормить',
	'break': 'проломить, разломить; прервать',
	'sell': 'продавать',
	'educate': 'обучать, образовывать',
	'lock': 'запирать (на замок)',
	'like': 'нравиться',
	'share': 'делиться (чем-то с кем-то)',
	'build': 'строить',
	'laugh': 'смеяться, хохотать',
	'clean': 'чистить',
	'buy': 'покупать',
	'guide': 'направлять (вот там оно); путеводить',
	'watch': 'смотреть',
	'see': 'видеть',
	'love': 'любить',
	'speak': 'говорить, высказывать, изьясняться',
	'kiss': 'целовать',
	'touch': 'трогать, коснуться',
	'kick': 'пинать, ударять ногой',
	'exercise': 'упражняться',
	'teach': 'учить (кого-то)',
	'drive': 'водить машину',
	'wake': 'будить',
	'push': 'толкать',
	'swim': 'плавать',
	'close': 'закрывать',
	'open': 'открывать (окно)',
	'fight': 'драться, сражаться',
	'dig': 'копать, рыть',
	'clap': 'хлопать (в ладоши), похлопать',
	'cook': 'готовить (еду), варить',
	'ask': 'просить, спрашивать',
	'dream': 'мечтать, сниться',
	'cut': 'резать, разрезать, стричь, остричь',
	'fly': 'летать',
	'stand': 'стоять, устоять; простаивать',
	'climb': 'взьираться, лазить',
	'sing': 'петь',
	'pray': 'молиться',
	'think': 'думать, мыслить, считать',
	'wait': 'ждать, ожидать',
	'wash': 'стирать, мыть',
	'sleep': 'спать',
	'study': 'изучать, учиться',
	'write': 'писать',
	'read': 'читать',
	'drink': 'пить',
	'eat': 'есть, кушать',
	'jump': 'прыгать, скакать',
	'sew': 'шить, пришить, сшить, зашить',
	'wear': 'одевать, носить',
	'tremble': 'дрожать, трепетать',
	'limp': 'хромать',
	'draw': 'рисовать, зарисовывать',
	'paint': 'красить, расписывать, раскрашивать',
	'hide': 'прятаться',
	'smile': 'улыбаться',
	'whirl': 'кружиться, кружить (халахуп)',
	'swing': 'качаться (на качели), раскачиваться',
	'leap': 'прыгнуть',
	'bend': 'сгибать, гнуть, изгибать; нагибаться',
	'kneel': 'становиться на колени',
	'lean': 'опираться (на какой-то предмет)',
	'lift': 'поднимать (какой-то вес)',
	'crawl': 'ползать',
	'cry': 'реветь, плакать (сильно)',
	'look': 'глядеть, смотреть; выглядеть',
	'pick': 'подбирать; нарвать; подковырять',
	'put': 'помещать, класть, ставить, положить что-то',
	'drag': 'тащить',
	'walk': 'идти пешком, прогуливаться',
	'march': 'маршировать, шествовать',
	'run': 'бегать, бежать',
	'jog': 'бегать (трусцой)',
	'punch': 'бить',
	'point': 'указывать',
	'catch': 'ловить, поймать',
	'hit': 'ударять',
	'swallow': 'глотать, проглатывать',
	'spit': 'плевать, сплюнуть',
	'bake': 'выпекать, запекать',
	'bow': 'кланяться, преклоняться',
	'knead': 'месить (тесто), замешивать, уминать',
	'polish': 'полировать, начищать, драить',
	'discuss': 'обсуждать, обговаривать (задачу, проблему)',
	'whisper': 'шептать',
	'hop': 'подскакнуть (на одной ноге)',
	'smoke': 'курить',
	'receive': 'получать',
	'protect': 'защищать, защищаться',
	'attack': 'атаковать, нападать',
	'repair': 'чинить',
	'destroy': 'разрушать, уничтожать, крушить',
	'pull': 'тянуть',
	'hew': 'рубить (дрова), прорубать',
	'carve': 'вырезать, высекать (из камня), разделывать',
	'drill': 'сверлить, бурить',
	'mine': 'добывать (ископаемые); вести подкоп; рыть норку',
	'snip': 'надрезать, резать ножницами',
	'slice': 'нарезать, резать ломтиками',
	'tow': 'буксировать, тянуть за собой',
	'yank': 'дергать, что-то сильно потянуть',
	'spill': 'проливать, разливать, вывалить',
	'crumple': 'мять, смять, скомкать',
	'sink': 'тонуть, затонуть, потонуть',
	'dive': 'нырять, погружаться',
	'trip': 'ставить подножку, спотыкнуть',
	'slip': 'соскальзывать, поскользнуться',
	'chop': 'нарезать, кришить (овощи на доске)',
	'knit': 'вязать',
	'ski': 'кататься на лыжах',
	'skate': 'кататься на коньках',
	'surf': 'заниматься серфингом',
	'cuddle': 'обнимать, прижимать к себе',
	'ride': 'ездить, кататься, катать',
	'sniff': 'нюхать, шмыгать носом',
	'listen': 'слушать',
	'sculpt': 'ваять (скульптуру), лепить',
	'nibble': 'грызть, покусывать',
	'shove': 'спихнуть, резко толкнуть',
	'slide': 'скользить (на горке)',
	'glide': 'планировать (по воздуху), двигаться плавно, двигаться безшумно',
	'shake': 'трясти, тряхнуть',
	'roll': 'раскатать (тесто), катать, вальцевать',
	'hang': 'вешать, висеть',
	'wring': 'выкручивать (полотенце)',
	'dust off': 'отряхнуться, отряхивать пыль',
	'lick': 'лизать',
	'bite': 'кусать',
	'burn': 'обжечь, прожигать, гореть',
	'sweep': 'мести',
	'beg': 'умолять, упросить, побираться',
	'hurry': 'торопиться',
	'forget': 'забывать',
	'accept': 'принимать',
	'fail': 'терпеть неудачу, не иметь успеха',
	'comb': 'расчесывать',
	'dip': 'окунать (печеньки в молоко), мокнуть, обмочить',
	'steal': 'воровать, красть',
	'squash': 'давить, раздавливать',
	'wipe': 'вытирать',
	'bump': 'удариться, ушибиться (по случайности об что-то)',
	'blow': 'дуть, выдувать',
	'vomit': 'блевать, рыгать',
	'pee': 'писать',
	'fart': 'пердеть',
	'bath': 'купаться, мыться',
	'smell': 'пахнуть, понюхать, обонять, ощущать запах',
	'tiptoe': 'ходить на цыпочках, красться',
	'rinse': 'смывать, прополоскать, сполоскать',
	'sprinkle': 'посыпать, прыскать',
	'shave': 'брить, бриться',
	'flinch': 'вздрагивать (от испугу, от боли)',
	'gulp': 'жадно глотать',
	'gasp': 'открыть рот (удивленно как бы вздыхнуть в себя)',
	'curl': 'виться, завивать, завить, кудрявиться',
	'saunter': 'прогуливаться, прохаживаться',
	'mutter': 'бормотать',
	'bawl': 'реветь',
	'sob': 'рыдать, хныкать, всхлыпывать',
	'bark': 'лаять, гавкать',
	'chirp': 'чирикать',
	'stomp': 'топтать',
	'duck': 'быстро наклонить голову (увернуться от чего-то, резко спрятаться)',
	'float': 'плавать (на поверхности)',
	'row': 'грести; распологать рядами',
	'trim': 'подрезать, подравнивать, подбривать, торцевать',
	'scrub': 'тереть, оттирать (мыть щеткой, очищать)',
	'poop': 'какать',
	'water': 'поливать',
	'dance': 'танцевать',
	'whistle': 'свистать',
	'squat': 'приседать, сидеть на корточках',
	'vaccum': 'вакумировать, пылесосить',
	'taste': 'пробовать (еду)',
	'suck': 'сосать, смоктать',
	'hug': 'обнимать',
	'go': 'идти, ехать',
	'come': 'приходить, приезжать',
	'awake': 'пробудиться',
	'dry': 'сушить',
	'hear': 'слышать',
	'decorate': 'украшать',
	'scold': 'ругать, бранить',
	'cross': 'пересекать (дорогу), перечеркивать (слово)',
	'slap': 'шлепать (пощечину)',
	'chew': 'жевать',
	'rescue': 'спасать',
	'brush': 'чистить (щеткой)',
	'mop': 'мыть шваброй',
	'beat': 'быть, колотить',
	'wink': 'подмигывать (глазом)',
	'iron': 'гладить (одежду)',
	'admit': 'признавать',
	'descend': 'спуститься',
	'ascend': 'восходить',
	'agree': 'соглашаться',
	'import': 'импортировать',
	'export': 'экспортировать',
	'exclude': 'исключать',
	'forbid': 'запрещать',
	'allow': 'позволять',
	'borrow': 'занимать',
	'lend': 'одалживать',
	'dislike': 'не нравиться',
	'enjoy': 'наслаждаться',
	'subtract': 'вычитать',
	'learn': 'учиться, узнавать',
	'melt': 'таять, растопить, плавить',
	'freeze': 'заморозить, замораживать, замерзать',
	'waste': 'напрасно тратить',
	'remember': 'помнить, запомнить, вспомнить, припоминать',
	'disagree': 'не соглашаться, расходиться/не совпадать во мнении',
	'annoy': 'раздражать, досаждать',
	'amuse': 'развлекать, забавлять, тешить',
	
};