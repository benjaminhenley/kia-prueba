import CookiesTable from "../Components/Cookies/CookiesTable";

// Technical cookies data
const TECHNICAL_COOKIES = [
  {
    host: "Indicar Dominio",
    name: "OptanonConsent",
    duration: "364 días",
    serviceType: "Propia",
    category: "Cookies necesarias",
    description:
      "Esta cookie es establecida por la solución de cumplimiento de cookies de OneTrust. Almacena información sobre las categorías de cookies que utiliza el sitio y si los visitantes han dado o retirado su consentimiento para el uso de cada categoría. Esto permite a los propietarios del sitio evitar que las cookies de cada categoría se instalen en el navegador de los Usuarios, cuando no se da el consentimiento. La cookie tiene una vida útil normal de un año, por lo que los visitantes que regresan al sitio tendrán sus preferencias recordadas. No contiene información que pueda identificar al visitante del sitio.",
    transfers: "Estados Unidos",
  },
  {
    host: "Indicar Dominio",
    name: "JSESSIONID",
    duration: "Sesión",
    serviceType: "Propia",
    category: "Cookies necesarias",
    description:
      "Cookie de sesión de plataforma de uso general, utilizada por sitios escritos en JSP. Normalmente se utiliza para mantener una sesión de Usuario anónima por el servidor.",
    transfers: "Estados Unidos",
  },
  {
    host: "Indicar Dominio",
    name: "OptanonAlertBoxClosed",
    duration: "364 días",
    serviceType: "Propia",
    category: "Cookies necesarias",
    description:
      "Esta cookie es establecida por sitios web que utilizan ciertas versiones de la solución de cumplimiento de la ley de cookies de OneTrust. Se establece después de que los visitantes han visto un aviso de información de cookies y en algunos casos solo cuando cierran activamente el aviso. Permite que el sitio web no muestre el mensaje más de una vez a un Usuario. La cookie tiene una vida útil de un año y no contiene información personal.",
    transfers: "Estados Unidos",
  },
];

// Analytics cookies data
const ANALYTICS_COOKIES = [
  {
    host: "Indicar Dominio",
    name: "_ga",
    duration: "364 días",
    serviceType: "Propia",
    category: "Cookies analíticas",
    description:
      "Este nombre de cookie está asociado con Google Universal Analytics, que es una actualización significativa del servicio de análisis más utilizado de Google. Esta cookie se utiliza para distinguir usuarios únicos asignando un número generado aleatoriamente como identificador de cliente. Se incluye en cada solicitud de página en un sitio y se utiliza para calcular los datos de visitantes, sesiones y campañas para los informes de análisis de sitios. Por defecto, está configurada para expirar después de 2 años, aunque esto es personalizable por los propietarios del sitio web.",
    transfers: "Estados Unidos",
  },
  {
    host: "Indicar Dominio",
    name: "_ga_xxxxxxxxxx",
    duration: "729 días",
    serviceType: "Propia",
    category: "Cookies analíticas",
    description: "-",
    transfers: "Estados Unidos",
  },
  {
    host: "Indicar Dominio",
    name: "_gat",
    duration: "Algunos segundos",
    serviceType: "Propia",
    category: "Cookies analíticas",
    description:
      "Este nombre de cookie está asociado a Google Universal Analytics, según la documentación que se utiliza para limitar la tasa de solicitud, lo que limita la recopilación de datos en sitios de alto tráfico. Expira después de 10 minutos.",
    transfers: "Estados Unidos",
  },
  {
    host: "Indicar Dominio",
    name: "_gid",
    duration: "Algunos segundos",
    serviceType: "Propia",
    category: "Cookies analíticas",
    description:
      "Este nombre de cookie está asociado a Google Analytics. Esta es una nueva cookie y a partir de la primavera de 2017 no hay información disponible de Google. Parece almacenar y actualizar un valor único para cada página visitada.",
    transfers: "Estados Unidos",
  },
];

// Advertising cookies data
const ADVERTISING_COOKIES = [
  {
    host: "google.com",
    name: "NID",
    duration: "182 días",
    serviceType: "Tercero",
    category: "Marketing",
    description:
      "Este dominio es propiedad de Google Inc. Aunque Google se conoce principalmente como un motor de búsqueda, la compañía ofrece una amplia gama de productos y servicios. Sin embargo, su principal fuente de ingresos es la publicidad. Google realiza un seguimiento de una gran variedad de información sobre los usuarios para incluir anuncios relevantes y personalizados en las propiedades integradas en muchos millones de sitios web en todo el mundo. Utiliza los datos recopilados de la mayoría de estos servicios para perfilar los intereses de los usuarios de la web y vender espacios publicitarios a organizaciones basadas en dichos perfiles de interés, así como para alinear los anuncios con el contenido de las páginas donde aparecen los anuncios de sus clientes.",
    transfers: "Estados Unidos",
  },
];

// Cookie policy sections data
const sections = [
  {
    id: 1,
    title: "¿Qué es una Cookie?",
    content: (
      <h6 className="">
        Una cookie es un archivo de texto que se descarga en el dispositivo del
        Usuario (ordenador/ smartphone/ tablet) cuando accede a determinadas
        páginas web, con la finalidad de almacenar y recuperar información sobre
        los hábitos de la navegación que se efectúan desde el equipo.
      </h6>
    ),
  },
  {
    id: 2,
    title: "¿Qué tipos de Cookies utilizamos?",
    content: (
      <>
        <div className="px-9 py-4 md:px-[50px] md:py-[22px]">
          <h6 className="font-normal">
            El Usuario que navega por este sitio web puede encontrar cookies
            instaladas directamente desde la entidad responsable, o bien cookies
            instaladas desde dominios o equipos gestionados por terceras
            entidades de conformidad con la información detallada en el
            siguiente apartado:
          </h6>
          <h6 className="font-normal mt-4">
            2.1.- Según la entidad que las gestione:
          </h6>
          <h6 className="font-normal">
            <span className="">Cookies Propias:</span> Son aquellas que se
            envían al equipo terminal del Usuario desde un equipo o dominio
            gestionado por el titular del sitio web y desde que se presta el
            servicio solicitado por el Usuario.
          </h6>
          <h6 className="font-normal mb-4">
            <span className="">Cookies de terceros:</span> Son aquellas que se
            envían al equipo terminal del Usuario desde un equipo o dominio que
            no es gestionado por el titular del Sitio, sino por otra entidad que
            trata los datos obtenidos a través de las cookies.
          </h6>

          <h6 className="font-normal mt-4">
            2.2.- Según el plazo de tiempo que permanecen activas:
          </h6>
          <h6 className="font-normal mb-2">
            <span className="">Cookies de sesión:</span> Son un tipo de cookies
            diseñadas para recabar y almacenar datos mientras el Usuario accede
            a un sitio web y desaparecen al terminar la sesión. Estas Cookies no
            quedan almacenadas en el ordenador del Usuario una vez finalizada la
            sesión o cierra el navegador.
          </h6>
          <h6 className="font-normal mb-4">
            <span className="">Cookies persistentes:</span> Este tipo de cookie
            permanece almacenada en el terminal del Usuario y pueden ser
            accedidos y tratados durante un periodo de tiempo determinado por el
            responsable de la cookie, que puede ir desde unos minutos hasta
            varios años.
          </h6>

          <h6 className="font-normal mt-4">2.3.- Según su finalidad:</h6>
          <h6 className="font-normal ">
            A continuación, se detallan las categorías de cookies que podrían
            ser instaladas en el dispositivo del Usuario según su finalidad y
            considerando que, de acuerdo con la información de la tabla sobre
            cada cookie en particular, tales cookies pueden ser instaladas por
            el titular del sitio web o por terceros:
          </h6>

          <h6 className="font-normal">
            Cookies técnicas: Son aquellas que permiten al Usuario la navegación
            a través de una página web, plataforma o aplicación y la utilización
            de las diferentes opciones o servicios que en ella existan,
            incluyendo aquellas que el responsable utiliza para permitir la
            gestión y operativa de la página web y habilitar sus funciones y
            servicios, como, por ejemplo, controlar el tráfico y la comunicación
            de datos, identificar la sesión, acceder a partes de acceso
            restringido, recordar los elementos que integran un pedido, realizar
            el proceso de compra de un pedido, gestionar el pago, controlar el
            fraude vinculado a la seguridad del servicio, realizar la solicitud
            de inscripción o participación en un evento, contar visitas a
            efectos de la facturación de licencias del software con el que
            funciona el servicio (sitio web, plataforma o aplicación), utilizar
            elementos de seguridad durante la navegación, almacenar contenidos
            para la difusión de vídeos o sonido, habilitar contenidos dinámicos
            (por ejemplo, animación de carga de un texto o imagen) o compartir
            contenidos a través de redes sociales.
          </h6>

          <h6 className="font-normal ">
            Cookies de preferencias o personalización: Son aquellas que permiten
            recordar información para que el Usuario acceda al servicio con
            determinadas características que pueden diferenciar su experiencia
            de la de otros Usuarios, como, por ejemplo, el idioma, el número de
            resultados a mostrar cuando el Usuario realiza una búsqueda, el
            aspecto o contenido del servicio en función del tipo de navegador a
            través del cual el Usuario accede al servicio o de la región desde
            la que accede al servicio, etc.
          </h6>

          <h6 className="font-normal">
            Cookies de análisis o medición: Son aquellas que permiten al
            responsable de las mismas el seguimiento y análisis del
            comportamiento de los Usuarios de los sitios web a los que están
            vinculadas, incluida la cuantificación de los impactos de los
            anuncios. La información recogida mediante este tipo de cookies se
            utiliza en la medición de la actividad de los sitios web, aplicación
            o plataforma, con el fin de introducir mejoras en función del
            análisis de los datos de uso que hacen los Usuarios del servicio.
          </h6>

          <h6 className="font-normal">
            Cookies publicitarias: Son aquéllas que permiten la gestión, de la
            forma más eficaz posible, de los espacios publicitarios que, en su
            caso, el responsable haya incluido en una página web, aplicación o
            plataforma desde la que presta el servicio solicitado en base a
            criterios como el contenido editado o la frecuencia con la que se
            muestran los anuncios.Cookies de publicidad comportamental: Son
            aquéllas que permiten la gestión, de la forma más eficaz posible, de
            los espacios publicitarios que, en su caso, el responsable haya
            incluido en una página web, aplicación o plataforma desde la que
            presta el servicio solicitado. Estas cookies almacenan información
            del comportamiento de los Usuarios y se obtiene a través de la
            observación continuada de sus hábitos de navegación, lo que permite
            desarrollar un perfil específico para mostrar publicidad en función
            del mismo, en base a una decisión automatizada.
          </h6>

          <h6 className="font-normal">
            Puede consultar las cookies que utilizamos a continuación:
          </h6>
          <h6 className="font-normal mt-4">
            Siguiendo las directrices de la Agencia Española de Protección de
            Datos procedemos a detallar el uso de cookies que hace esta web con
            el fin de informarle con la máxima exactitud posible:
          </h6>
        </div>

        {/* Cookie tables */}
        <CookiesTable
          data={TECHNICAL_COOKIES}
          title="Cookies técnicas"
          className="mt-1.5"
        />
        <CookiesTable data={ANALYTICS_COOKIES} title="Cookies analíticas" />
        <CookiesTable
          spanish={true}
          data={ADVERTISING_COOKIES}
          title="Cookies de publicidad"
          className="mt-4"
        />
      </>
    ),
    specialStyle: false,
  },
  {
    id: 3,
    title: "Administración de las Cookies",
    content: (
      <>
        <h6 className="font-regular">3.1.- Rechazo del Uso de las Cookies.</h6>
        <h6 className="">
          Ud. puede aceptar el uso de cookies que le permiten usar la totalidad
          de las funciones del sitio web sin restricciones en su visita. El
          rechazo de las Cookies estrictamente necesarias para el funcionamiento
          de la página web puede afectar a su visita y a las funciones de la
          página durante su uso.
        </h6>
        <h6 className="">
          Si Ud. rechaza el uso de todas las cookies, se desactivarán tanto las
          cookies propias como las de terceros. Además, las cookies propias se
          eliminarán. Tenga en cuenta que si acepta cookies de terceros deberá
          eliminarlas desde las opciones del navegador o desde el sistema
          ofrecido por el propio tercero.
        </h6>

        <h6 className="font-regular mt-4">
          3.2.- Información Recopilada por el Uso de las Cookies.
        </h6>
        <h6>
          Cuando se instalan cookies técnicas (necesarias) en su dispositivo o
          cuando los Usuarios consienten expresamente la instalación de
          cualquier otra tipología de cookies en sus dispositivos, la entidad y
          los terceros (proveedores de servicios o terceros ajenos) pueden
          recabar una serie de datos, entre los cuales se incluyen los
          siguientes:
        </h6>
        <h6>
          Detalles técnicos acerca de los dispositivos utilizados por los
          Usuarios, entre los que se incluyen: conexión a internet y/o a otras
          redes (incluyendo dirección ip), identificador de dispositivo móvil,
          su sistema operativo, tipo de navegador u otra clase de software o
          datos de su equipo u otros detalles técnicos.
        </h6>
        <h6>
          Detalles del uso de los servicios de esta página web incluidos, entre
          otros: información métrica acerca de cuándo y cómo los Usuarios
          utilizan el sitio web, datos de tráfico, la fecha y la hora de la
          última vez que el Usuario visitó nuestro sitio web, el acceso a los
          contenidos que el Usuario escogió en su última visita a nuestra página
          web.
        </h6>
        <h6>
          Datos respecto al consentimiento informado prestado expresamente por
          los Usuarios para la instalación de cookies en sus dispositivos,
          incluido el estado de consentimiento del Usuario como prueba del
          consentimiento requerido y prestado.
        </h6>

        <h6 className="font-regular mt-4">
          3.3.- Eliminación de Cookies de su Navegador.
        </h6>
        <h6 className="">
          Ud. podrá gestionar el uso de cookies a través del navegador instalado
          en su equipo. Su navegador de Internet le permite modificar la
          configuración de las cookies. Esta configuración suele encontrarse en
          el menú «opciones», «herramientas» o «preferencias» del navegador. Los
          Usuarios también pueden consultar el menú «ayuda» del navegador. Los
          distintos navegadores utilizan distintos mecanismos para desactivar
          las cookies.
        </h6>
        <h6 className="mb-4">
          En los siguientes enlaces Ud. podrá conocer qué tipo de cookies han
          sido instaladas, así como el procedimiento para su bloqueo o
          eliminación de su ordenador. En función del navegador empleado, podrá
          utilizar alguno de los siguientes links:
        </h6>
        <ul className="list-none mb-4">
          <li className="mb-1">
            <h6>
              <a
                href="https://support.mozilla.org/es/kb/Borrar%20cookies"
                className="underline">
                Firefox
              </a>
            </h6>
          </li>
          <li className="mb-1">
            <h6>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es"
                className="underline">
                Chrome
              </a>
            </h6>
          </li>
          <li className="mb-1">
            <h6>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                className="underline">
                Safari
              </a>
            </h6>
          </li>
          <li className="mb-1">
            <h6>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                className="underline">
                Microsoft Edge
              </a>
            </h6>
          </li>
          <li className="mb-1">
            <h6>
              <a
                href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d"
                className="underline">
                Microsoft Explorer
              </a>
            </h6>
          </li>
          <li className="mb-1">
            <h6>
              <a
                href="https://help.opera.com/en/latest/web-preferences/#cookies"
                className="underline">
                Opera
              </a>
            </h6>
          </li>
        </ul>
        <h6 className="mb-4">
          Asimismo, Ud. puede acceder nuevamente al panel de configuración de
          las cookies de esta página web a través del enlace ubicado en el pie
          de página en el apartado "Configurar Cookies".
        </h6>
        <h6>
          Tenga en cuenta que, si acepta las cookies de terceros, deberá
          eliminarlas desde las opciones del navegador o desde el sistema
          ofrecido por el propio tercero.
        </h6>
      </>
    ),
    specialStyle: true,
  },
  {
    id: 4,
    title: "Transferencias de datos a terceros países",
    content: (
      <>
        <h6 className="mb-4">
          Respecto de los datos recabados a través de cookies propias, éstos son
          tratados dentro del Espacio Económico Europeo o en países que han sido
          declarados con un nivel adecuado de protección.
        </h6>
        <h6>
          Sin perjuicio de lo anterior, la página web cuenta con cookies de
          terceros que prestan servicios a la entidad y que pueden almacenar y
          acceder la información que recaban incluso fuera del EEE.
        </h6>
      </>
    ),
    specialStyle: false,
  },
  {
    id: 5,
    title: "Información sobre datos de carácter personal",
    content: (
      <>
        <h6 className="mb-4">
          El responsable trata los datos personales de acuerdo a lo establecido
          en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo,
          de 27 de abril de 2016, relativo a la protección de las personas
          físicas en lo que respecta al tratamiento de datos personales y a la
          libre circulación de estos datos, y demás legislación aplicable.
        </h6>
        <h6>
          Te recomendamos que consultes nuestra Política de Privacidad para
          obtener más información acerca del tratamiento de datos personales que
          realizamos, así como la forma de ejercer tus derechos y reclamaciones
          ante el Delegado de Protección de Datos y/o la autoridad de control
          correspondiente.
        </h6>
      </>
    ),
    specialStyle: false,
  },
  {
    id: 6,
    title: "Actualización de la corriente Política de Cookies",
    content: (
      <>
        <h6 className="mb-4">
          Esta Política se revisa periódicamente para asegurar su vigencia, por
          lo que puede ser modificada. Le recomendamos que visite la página con
          regularidad donde le informaremos de cualquier actualización al
          respecto.
        </h6>
        <h6>Copyright 2024, 2/05/2024. Todos los derechos reservados.</h6>
      </>
    ),
    specialStyle: false,
  },
];

export default sections;
