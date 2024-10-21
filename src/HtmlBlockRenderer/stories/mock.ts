export default [
  {
    type: 'markdown',
    data: {
      content: 'Прошло 6 месяцев с тех пор, как я купил Home Assistant Green — мини-сервер, который работает на платформе умного дома с открытым исходным кодом Home Assistant. Несмотря на то, что у меня были моменты разочарования с Home Assistant, он оказался мощной платформой умного дома, которая может делать больше, чем большинство других платформ, которые я использовал. Она невероятно гибкая. Для меня главной особенностью Home Assistant Green стала его цена. Он стоит всего 13 000 рублей, что делает его доступным для многих людей, которые интересовались Home Assistant и хотят локально управляемый, частный хаб для умного дома. Это более дешевая версия Home Assistant Yellow, которая идет с интегрированным чипом Zigbee, но часто не включает в себя Raspberry Pi Compute Module, который вам нужно будет установить для Home Assistant, и вдвое дороже по сравнению с Home Assistant Green.\n\n## Особенности\n\nHome Assistant Green включает два открытых порта USB-A на задней панели, так что вы можете устанавливать модули plug-and-play, такие как Home Assistant SkyConnect, который позволяет Home Assistant Green подключаться непосредственно к устройствам Zigbee, Matter и Thread. Еще одним важным преимуществом Home Assistant является то, что он работает локально, поэтому по умолчанию он не основан на облаке, хотя есть способы подключения его к облаку. Это дает несколько преимуществ, таких как лучшая конфиденциальность ваших данных о смарт-доме, более быстрая автоматизация и меньшее влияние от отключений. Третье преимущество Home Assistant — это его открытая природа. Это означает, что его код не принадлежит одной компании, а разрабатывается сообществом участников со всего мира. Недавно было объявлено, что Home Assistant теперь будет управляться Open Home Foundation, новой некоммерческой организацией. Это делает Home Assistant уникальным по сравнению с конкурентами, такими как Samsung SmartThings, Amazon, Google, Apple и Homey. Все эти компании работают с целью получения прибыли, но у Home Assistant другие стимулы. Они не пытаются зарабатывать деньги, продавая дорогое оборудование, собирая ваши данные или заставляя их помощника постоянно спрашивать, хотите ли вы повторно заказать то, что у вас уже есть.\n\nОбнадеживает видеть, что Open Home Foundation сосредоточена на этих областях, потому что если технологии умного дома действительно должны начать развиваться для всех, эти аспекты критически важны, чтобы избежать подводных камней, с которыми сталкивается множество технологий умного дома сегодня, которые отталкивают многих пользователей.\n\n## Настройка\n\nДвигаясь дальше, еще одним моментом, который я выделил с Home Assistant Green, была его настройка. Это было просто, хотя установка может занять до 20 минут. Немного запутанно было попытаться понять, когда установка завершена, потому что она не обновлялась автоматически. Мне нужно было вручную нажать на обновление, чтобы увидеть завершение установки. После завершения начальной настройки вы можете добавить свои существующие или новые устройства в Home Assistant. Некоторые из этих устройств будут автоматически определены, в то время как другие, например, мой пылесос Roborock, мне пришлось добавить вручную. Настройка Zigbee-устройств с использованием адаптера SkyConnect была довольно простой. Мне прислали SkyConnect и несколько устройств Sonoff Zigbee от AeraDroid бесплатно для тестирования, и процесс был довольно простым, как только я разобрался, что, на самом деле, идеально описывает большинство моих текущих впечатлений от Home Assistant. Мне было легко пропустить текст внизу карты, пришедшей с SkyConnect, но эти инструкции по настройке довольно критичны. Я добавил интеграцию Zigbee, следовал шагам для настройки своей Zigbee-сети, а затем выбрал «Добавить устройства» из этого устройства для поиска новых Zigbee-устройств. Затем я просто взял свою умную розетку Sonoff, удерживал ее кнопку нажатой в течение 5 секунд, чтобы перевести ее в режим спаривания, и вуаля, она появилась, и я смог спарить ее с Home Assistant — и все это без необходимости предоставлять другому компании свой адрес электронной почты для создания учетной записи.\n\n## Практическое использование и сценарии\n\nТеперь, идея, которую я имел для этого переключателя, заключалась в том, чтобы исправить проблему с моим принтером. Он просто перестал отображаться для устройств Apple через некоторое время, и единственный надежный способ решить эту проблему — это просто выключить его и снова включить. Поскольку Home Assistant имеет как мост HomeKit, так и интеграцию устройств HomeKit, вы можете легко добавить устройства Home Assistant в HomeKit или устройства HomeKit в Home Assistant. Итак, я создал мост, выбрал переключатель принтера и добавил его в HomeKit через QR-код. Вуаля, он появился в моем приложении Apple Home. Затем я создал ярлык, который выключает принтер на 5 секунд, а затем снова включает его. И поскольку ярлыки работают с Siri по умолчанию, он просто выполняет это, когда я прошу Siri переключить принтер. Этот сценарий демонстрирует, насколько мощным и гибким может быть Home Assistant для автоматизации частей вашего дома именно так, как вы хотите, объединяя различные типы устройств, протоколы и даже платформы.\n\n## Автоматизация и интеграция\n\nHome Assistant поддерживает множество различных типов автоматизации и более продвинутый, чем большинство других платформ умного дома. Более того, Home Assistant позволяет вам автоматизировать сущности, которые являются строительными блоками Home Assistant и ваших домашних данных, и действовать иначе, чем Home Assistant обрабатывает отдельные устройства. Например, если у вас есть датчик движения с интегрированным температурным и световым датчиком, датчик движения будет отображаться в Home Assistant как одно устройство, но будет содержать три отдельные сущности. Таким образом, вы можете создать автоматизацию на основе светового датчика, игнорируя движение. Еще одной важной особенностью Home Assistant являются панели управления. Каждое устройство, которое вы добавляете в Home Assistant, по умолчанию отображается на главной панели управления. Тем не менее, интересная особенность Home Assistant заключается в том, что вы можете настраивать вид вашей панели управления, создавать несколько панелей и для некоторых устройств даже изменять дизайн карты на панели. Например, я настроил панель, которую я открываю на своем Pixel Tablet, специально для комнаты, чтобы немного упростить доступ к устройствам в этой комнате.\n\n## Интеграции с Home Assistant Green\n\nПоследним основным преимуществом Home Assistant Green является то, сколько интеграций вы можете сделать с Home Assistant. Благодаря тому, что это один из крупнейших проектов с открытым исходным кодом в мире, даже если у вас есть устройство, которое не имеет родной поддержки интеграции с Home Assistant, вероятно, кто-то нашел способ интегрировать его в вашу инстанцию Home Assistant, если вы готовы потратить время и следовать ряду шагов, чтобы это сделать. Интеграция моих устройств Google Nest и Ecobee включала несколько шагов, создание учетных записей разработчиков и множество других обходных путей для интеграции этих устройств в Home Assistant. Это, вероятно, самый большой недостаток Home Assistant Green и Home Assistant в целом: может потребоваться много времени на работу в зависимости от ненативных устройств, которые вы пытаетесь интегрировать, и автоматизаций, которые вы пытаетесь настроить. Также нет возможности включить автоматические обновления Home Assistant по умолчанию, так что вам нужно будет войти и вручную обновлять программное обеспечение время от времени. Это занимает менее 5 минут, поэтому это не затрудняет, но это просто еще одно дело, о котором вам нужно помнить.\n\n## Недостатки Home Assistant\n\nЕще одним недостатком, с которым я столкнулся в Home Assistant, является то, что даже если вам удастся интегрировать устройство, функциональность этого устройства часто ограничена. Например, хотя Philips Hue действительно имеет довольно хорошую интеграцию с Home Assistant, все равно гораздо проще зайти в приложение Philips Hue, чтобы настроить определенные параметры, особенно для аксессуаров, таких как мои переключатели света. Или для моего Roborock S8 MaxV, который я тестировал, интеграция Roborock позволяет выполнять базовые действия, но для более сложных действий, таких как отправка его в несколько комнат или указание роботу пропылесосить переднюю холл, вам нужно будет выполнить несколько сценариев и автоматизаций и потенциально настроить несколько карт на своих панелях, чтобы настроить все так, как вы хотите. Это на самом деле отличный пример того, насколько гибким может быть использование Home Assistant Green, но вам нужно будет уделить время, чтобы это сделать.\n\nЕще одним небольшим недостатком Home Assistant Green является его эстетика. Это довольно базовый, техничный сервер. Это не то, что вы захотите оставить на столе так же, как был спроектирован Homey Pro, например. Хотя у Home Assistant Green по умолчанию нет таких вещей, как ИК-бластер, вы можете просто убрать его в шкаф, как я сделал, и, к счастью, вы можете отключить все светодиоды спереди в настройках устройства через Home Assistant.\n\nЕще одним большим недостатком Home Assistant является то, что в настоящее время нет оборудования plug-and-play для голосового управления.',
    },
  }];
