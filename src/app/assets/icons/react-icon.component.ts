import { Component, input } from '@angular/core';

import { IconComponentDefinition } from '@/models';

@Component({
  selector: 'app-react-icon',
  template: `
    @if (animateOnHover()) {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 -14 256 256"
        transform="translate(0, -0.9)"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z"
            fill="#00D8FF"
          ></path>
        </g>
      </svg>
    } @else {
      <svg
        [attr.width]="size()"
        [attr.height]="size()"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M24 11.689C24 10.0991 22.009 8.59234 18.9564 7.65797C19.6608 4.54668 19.3477 2.07134 17.9682 1.27884C17.6502 1.09295 17.2784 1.00489 16.8724 1.00489V2.0958C17.0974 2.0958 17.2784 2.13983 17.4301 2.22299C18.0954 2.60457 18.384 4.05748 18.159 5.92621C18.1052 6.38606 18.0171 6.87036 17.9095 7.36445C16.9507 7.12964 15.9038 6.94863 14.8031 6.83123C14.1427 5.92621 13.4578 5.10436 12.768 4.38524C14.3628 2.90298 15.8598 2.09091 16.8773 2.09091V1C15.532 1 13.7709 1.95883 11.9902 3.6221C10.2095 1.96861 8.44843 1.01957 7.10314 1.01957V2.11048C8.11578 2.11048 9.61761 2.91765 11.2124 4.39013C10.5275 5.10925 9.84264 5.92621 9.19201 6.83123C8.08643 6.94863 7.03954 7.12964 6.08072 7.36934C5.9682 6.88015 5.88504 6.40563 5.82633 5.95067C5.59641 4.08194 5.88015 2.62903 6.54056 2.24256C6.68732 2.1545 6.87811 2.11537 7.10314 2.11537V1.02446C6.69221 1.02446 6.32042 1.11252 5.99755 1.29841C4.62291 2.09091 4.31472 4.56135 5.02405 7.66286C1.98125 8.60212 0 10.104 0 11.689C0 13.2788 1.99103 14.7856 5.04362 15.7199C4.33918 18.8312 4.65226 21.3066 6.0318 22.0991C6.34978 22.285 6.72157 22.373 7.13249 22.373C8.47778 22.373 10.2389 21.4142 12.0196 19.7509C13.8002 21.4044 15.5614 22.3534 16.9066 22.3534C17.3176 22.3534 17.6894 22.2654 18.0122 22.0795C19.3869 21.287 19.6951 18.8166 18.9857 15.715C22.0188 14.7807 24 13.274 24 11.689ZM17.6307 8.42601C17.4497 9.05707 17.2246 9.7077 16.9702 10.3583C16.7697 9.96698 16.5593 9.57562 16.3294 9.18427C16.1044 8.79291 15.8647 8.41133 15.625 8.03954C16.3196 8.14227 16.9898 8.26947 17.6307 8.42601ZM15.3901 13.636C15.0086 14.2964 14.6172 14.9225 14.2112 15.5047C13.4823 15.5683 12.7436 15.6025 12 15.6025C11.2613 15.6025 10.5226 15.5683 9.79861 15.5096C9.39258 14.9274 8.99633 14.3062 8.61476 13.6506C8.24297 13.0098 7.90542 12.3592 7.59723 11.7036C7.90053 11.0481 8.24297 10.3926 8.60987 9.75173C8.99144 9.09132 9.3828 8.46515 9.78883 7.883C10.5177 7.81941 11.2564 7.78516 12 7.78516C12.7387 7.78516 13.4774 7.81941 14.2014 7.87811C14.6074 8.46025 15.0037 9.08153 15.3852 9.73706C15.757 10.3779 16.0946 11.0285 16.4028 11.6841C16.0946 12.3396 15.757 12.9951 15.3901 13.636ZM16.9702 13C17.2344 13.6555 17.4594 14.311 17.6453 14.947C17.0045 15.1035 16.3294 15.2356 15.6298 15.3384C15.8695 14.9617 16.1093 14.5752 16.3343 14.179C16.5593 13.7876 16.7697 13.3914 16.9702 13ZM12.0098 18.2197C11.5548 17.7501 11.0999 17.2267 10.6498 16.6543C11.0901 16.6739 11.5402 16.6885 11.9951 16.6885C12.455 16.6885 12.9099 16.6788 13.3551 16.6543C12.9148 17.2267 12.4598 17.7501 12.0098 18.2197ZM8.37016 15.3384C7.6755 15.2356 7.0053 15.1084 6.36445 14.9519C6.54545 14.3208 6.77048 13.6702 7.02487 13.0196C7.22544 13.4109 7.43579 13.8023 7.66572 14.1936C7.89564 14.585 8.13045 14.9666 8.37016 15.3384ZM11.9853 5.15817C12.4403 5.6278 12.8952 6.15124 13.3453 6.7236C12.905 6.70404 12.455 6.68936 12 6.68936C11.5402 6.68936 11.0852 6.69914 10.64 6.7236C11.0803 6.15124 11.5353 5.6278 11.9853 5.15817ZM8.36527 8.03954C8.12556 8.41622 7.88585 8.80269 7.66082 9.19894C7.43579 9.5903 7.22544 9.98166 7.02487 10.373C6.7607 9.71749 6.53567 9.06197 6.34978 8.42601C6.99062 8.27436 7.66572 8.14227 8.36527 8.03954ZM3.93804 14.1643C2.20628 13.4256 1.08602 12.457 1.08602 11.689C1.08602 10.9209 2.20628 9.94741 3.93804 9.21362C4.35875 9.03261 4.81859 8.87118 5.29311 8.71953C5.57195 9.67835 5.93885 10.6763 6.3938 11.6987C5.94374 12.7163 5.58174 13.7093 5.30779 14.6633C4.82348 14.5116 4.36364 14.3453 3.93804 14.1643ZM6.56991 21.1549C5.90461 20.7733 5.61598 19.3204 5.84101 17.4517C5.89482 16.9918 5.98288 16.5075 6.0905 16.0135C7.04933 16.2483 8.09621 16.4293 9.1969 16.5467C9.85732 17.4517 10.5422 18.2735 11.232 18.9927C9.63718 20.4749 8.14024 21.287 7.12271 21.287C6.90257 21.2821 6.71667 21.2381 6.56991 21.1549ZM18.1737 17.4272C18.4036 19.296 18.1199 20.7489 17.4594 21.1353C17.3127 21.2234 17.1219 21.2625 16.8969 21.2625C15.8842 21.2625 14.3824 20.4554 12.7876 18.9829C13.4725 18.2638 14.1574 17.4468 14.808 16.5418C15.9136 16.4244 16.9605 16.2434 17.9193 16.0037C18.0318 16.4978 18.1199 16.9723 18.1737 17.4272ZM20.0571 14.1643C19.6364 14.3453 19.1765 14.5067 18.702 14.6584C18.4232 13.6996 18.0563 12.7016 17.6013 11.6792C18.0514 10.6616 18.4134 9.66857 18.6873 8.71464C19.1716 8.86629 19.6315 9.03261 20.062 9.21362C21.7937 9.9523 22.914 10.9209 22.914 11.689C22.9091 12.457 21.7888 13.4305 20.0571 14.1643Z"
            [attr.fill]="color()"
          />
          <path
            d="M11.9951 13.9246C13.2298 13.9246 14.2307 12.9237 14.2307 11.689C14.2307 10.4542 13.2298 9.45332 11.9951 9.45332C10.7604 9.45332 9.75948 10.4542 9.75948 11.689C9.75948 12.9237 10.7604 13.9246 11.9951 13.9246Z"
            [attr.fill]="color()"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    }
  `,
})
export class ReactIconComponent implements IconComponentDefinition {
  size = input.required<string | number>();
  color = input.required<string>();
  animateOnHover = input<boolean>();
}
