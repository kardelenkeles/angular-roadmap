Angular uygulaması 5 ayrı bölümden oluşur:

Module

Component

Directive

Routing

Service

## Module

Bir uygulamanın ana yapısını oluşturan bölümdür ve proje içerisinde 1'den fazla module olabilir.

Module içerisinde component, service, route, directive bulunabilir.

## Component

Component içerisinde data, template (HTML), form alanları bulunabilir. Component içerisinde başka component ler
bulunabilir ve bu şekilde bir DOM tree oluşturabiliriz.

## Directive

DOM içerisinde bulunan HTML elementler üzerinde işlem yapmamızı sağlar. Örneğin, Component içerisinde bulunan HMLT
elementlere event bağlayabiliriz.

## Service

En basit haliyle projemizin data layer bölümünü oluşturur. Özellikle component içerisinden data almamızı sağlar.

Örneğin, service üzerinde bir metot ile HTTP Request yaparız ve bir sonuç döndürürüz. Component bölümünden, service
metodunu kullanarak döndürülen sonuca ulaşırız.

Component ise gelen bu data yı render eder ve son kullanıcı için anlamlı hale getirir.

## Routing

Projemizin tüm URL yönetimini bu bölümde yaparız. Tarayıcı üzerinde belirtilen URL e gidildiğinde hangi component in
görüntüleneceğini belirleriz.

## Dosya Yapisi

#### node_modules

klasörü altında uygulamada kullanmak için indirdiğimiz paketleri görebilirsiniz örneğin bootstrap paketi materieal
design paketi indirdiğimiz paketlerin dosyaları bu klasör altına kaydedilir.

#### src klasörü

, component den css dosyalarına, image dosyalarından uygulamayı yayına almak için kullanılan konfigürasyonlara projede
kullandığımz kısımların büyük bölümünü barındırır.

#### assest

projede kullanılan image css dosyalarını koyduğumuz klasör

### app klasörü

projemizin ayağa kalktığı sayfa diyebiliriz.

app.component.html => design kısmı

app.component.ts => design kısmında kullanacağımız verileri şekilendirdiğimiz code behind kısmı

app.component.css => design kısmının css leri

app.module.ts => component de kullanılacak route veya modulleri belirtiriz.

main.ts => uygulamamızın ne şekilde ve nereden başlayacağını belirten dosya startup.cs gibi düşünebiliriz.

index.html => angular SPA (Single Page Application) mimarisi ile çalışır, yani tek bir sayfa ve oluşturulan tüm
sayfaların (componentlerin) bu sayfa içinden çağırılması ile çalışır. işte bizim projemizdeki index sayfasıda bu işi
görmekte <app-root></app-root> tagı ile projemizin açılış sayfasını burada ayağa kaldırıyoruz.

angular-json => dosyası angular cli ile ilgili konfigürasyonların bulunduğu dosyadır. Örnek verecek olursak bootstrap
paketini yükledik yüklenen bootstrap dosyaları node_modules altına kaydoldu uygulamanın bu dosyaları bulabilmesi için
yolunu angular-json da beliritiriz.

package.json => kullanacağımız paket konfigürasyonlarını tuttuğumuz dosya örneğin angular-cli sürümü, bootstrap sürümü
vs.. hatta ilerleyen konularda göreceğiz indirmek istediğimiz paket bilgilerini buraya yazıp install dediğimizde
projemize eklendiğini göreceğiz.
