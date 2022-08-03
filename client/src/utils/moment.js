import moment from 'moment';

export default moment.locale('es', {
    months: 'de Enero de_de Febrero de_de Marzo de_ de Abril de_de Mayo de_de Junio de_de Julio de_de Agosto de_de Septiembre de_de Octubre de_de Noviembre de_de Diciembre de'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  }
);
