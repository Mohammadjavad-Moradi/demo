import { headerActionTypes } from  './header.types';

const INITIAL = {
    quickLinksData: {
        tempTitle: 'quickLinksData',
        title: 'دسترسی های سریع',
        content : [
            {
                title: 'خانه',
                linkUrl: '/'
            },
            {
                title: 'اخبار پولی و بانکی',
                linkUrl: '/akhbarpoli'
            },
            {
                title: 'نظرها وپیام ها',
                linkUrl: '/nazarvapayam'
            },
            {
                title: 'اداره باشگاه',
                linkUrl: '/edarebashgah'
            },
            {
                title: 'اداره رفاه',
                linkUrl: '/edarerefah'
            },
            {
                title: 'بسیج',
                linkUrl: '/basij'
            },
            {
                title: 'کانون بازنشستگان',
                linkUrl: '/bazneshaste'
            }
        ]
    },
    tabItemsData: {
        tempTitle: 'tabItemsData',
        contents: [
           {
               title: 'اخبار و اطلاعات',
               sideOpen: false,
               tabContent: [
                   {
                       name: 'اخبار بانک',
                       linkUrl: '/akhbarbank'
                   },
                   {
                       name: 'اعلانات اداری',
                       linkUrl: '/announcements/official'
                   },
                   {
                       name: 'اعلانات مناسبتی',
                       linkUrl: '/announcements/occasional'
                   },
                   {
                       name: 'اخبار کرونا',
                       linkUrl: '/announcements/covid'
                   },
                   {
                       name: 'اخبار پولی',
                       linkUrl: '/akhbarpoli'
                   },
                   {
                       name: 'تحلیل مطبوعات',
                       linkUrl: '/tahlilmatboat'
                   },
                   {
                       name: 'نرخ ارز',
                       linkUrl: '/nerkharz'
                   }
               ]
           },
           {
               title: 'آموزش و منابع انسانی',
               sideOpen: false,
               tabContent: [
                   {
                       name: 'اداره اموزش',
                       linkUrl: '/edareamozesh'
                   },
                   {
                       name: 'سامانه منابع انسانی',
                       linkUrl: '/samanemanabeensani'
                   },
                   {
                       name: 'سامانه آموزش از راه دور',
                       linkUrl: '/samaneamozesh'
                   },
                   {
                       name: 'سامانه کنترل تردد',
                       linkUrl: '/samanetaradod'
                   },
                   {
                       name: 'کتابخانه',
                       linkUrl: '/ketabkhane'
                   }
               ]
           },
           {
               title: 'امور فرهنگی و روابط عمومی',
               sideOpen: false,
               tabContent: [
                   {
                       nestedEl: {
                           title: 'کتاب الکترونیک',
                           sideOpen: true,
                           tabContent: [
                               {
                                   name: 'بخش نوشتاری',
                                   linkUrl: '/ketabnevshtari'
                               },
                               {
                                   name: 'بخش صوتی',
                                   linkUrl: '/ketabsoooti'
                               }
                           ]
                       }
                   },
                   {
                       name: 'دنیای ارتباطات',
                       linkUrl: '/donyayeertebatat'
                   },
                   {
                       nestedEl: {
                           title: 'نشریات',
                           sideOpen: true,
                           tabContent: [
                               {
                                   name: 'کتابچه و بروشور',
                                   linkUrl: '/ketabche'
                               },
                               {
                                   name: 'مقالات',
                                   linkUrl: '/maghalat'
                               }
                           ]
                       }
                   },
                   {
                       nestedEl: {
                           title: 'مجموعه تصاویر',
                           sideOpen: true,
                           tabContent: [
                               {
                                   name: 'تصاویر مناسبتی',
                                   linkUrl: '/tasavirmonasebati'
                               },
                               {
                                   name: 'تصاویر ارسالی همکاران',
                                   linkUrl: '/ersalihamkaran'
                               }
                           ]
                       }
                   },
                   {
                       name: 'مجموعه فیلم',
                       linkUrl: '/majmoefilm'
                   },
                   {
                       name: 'نظرسنجی و مسابقه',
                       linkUrl: '/nazarsanjimosabeghe'
                   },
                   {
                       name: 'اعلانات مفید',
                       linkUrl: '/etelaatmofid'
                   },
                   {
                       name: 'آشنایی با بانک',
                       linkUrl: '/ashnaeebabank'
                   }
               ]
           },
           {
               title: 'اجتماعی و رفاهی',
               sideOpen: false,
               tabContent: [
                   {
                       name: 'اداره باشگاه',
                       linkUrl: '/edarebashgah'
                   },
                   {
                       name: 'اداره رفاه',
                       linkUrl: '/edarerefah'
                   },
                   {
                       nestedEl: {
                           title: 'مرکز آموزشی و رفاهی نوشهر',
                           sideOpen: true,
                           tabContent: [
                               {
                                   name: 'ثبت نام',
                                   linkUrl: '/sabtenam'
                               },
                               {
                                   name: 'عملیات مرکز',
                                   linkUrl: '/amaliatmarkaz'
                               }
                           ]
                       }
                   }
               ]
           },
           {
               title: 'فناوری اطلاعات',
               sideOpen: false,
               tabContent: [
                   {
                       nestedEl: {
                           title: 'مهندسی نرم افزار',
                           sideOpen: true,
                           tabContent: [
                               {
                                   name: 'راهنمای اتوماسیون',
                                   linkUrl: '/rahnamaautomasion'
                               },
                               {
                                   name: 'اعطای فرم دسترسی',
                                   linkUrl: '/formdastrasi'
                               }
                           ]
                       }
                   },
                   {
                       nestedEl: {
                           title: 'زیرساخت و پشتیبانی فناوری اطلاعات',
                           sideOpen: true,
                           tabContent: [
                               {
                                   name: 'اطلاعیه ها',
                                   linkUrl: '/etelaeeye'
                               },
                               {
                                   name: 'راهنمای آموزشی',
                                   linkUrl: '/rahnamaamozeshi'
                               },
                               {
                                   name: 'طرح ارتقاع سیستم عامل',
                                   linkUrl: '/erteghasystem'
                               }
                           ]
                       }
                   }
               ]
           },
           {
               title: 'تماس با ما',
               sideOpen: false,
               tabContent: [
                   {
                       name: 'ارتباط مستقیم با رئیس کل',
                       linkUrl: '/raeeskol'
                   },
                   {
                       name: 'ستاد خبری اداره حراست',
                       linkUrl: '/herasat'
                   },
                   {
                       name: 'پرسش های متداول',
                       linkUrl: '/porseshmotadavel'
                   },
                   {
                       name: 'نظرها و پیام ها',
                       linkUrl: '/nazarvapayam'
                   }
               ]
           }
       ]
    }
}
const INITIAL_STATE = null;

const headerReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case headerActionTypes.SET_HEADER_DATA:
            const header = action.payload
            return {
                ...state,
                ...header
            }
        case headerActionTypes.GET_QUICK_LINKS: 
            return (
                state.quickLinksData
            )
        case headerActionTypes.GET_TAB_ITEMS_DATA:
            return (
                state.tabItemsData
            )
        default:
            return state;
    }
}

export default headerReducer;