### Two Way Data Binding

İki yönlü bağlama, kullanıcıların HTML dosyasından veri girmesine ve bunu TypeScript dosyasına göndermesine ve geri
göndermesine olanak tanır. Bu, giriş doğrulama, manipülasyon ve daha fazlası için kullanışlıdır.

HTML’den TypeScript dosyasına veri ilettiğinizde, belirli iş mantığını tamamlamak için verileri kullanabilirsiniz. Örnek
bir senaryo, bir giriş alanına girilen adın zaten var olup olmadığını kontrol etmek istemeniz olabilir.

## NgModel

ng-model yönergesi; adı üzerinde herhangi bir etkileşimli html etiketinde
`<input>` 
ilgili içeriği elde etmek için model tanımlamamızı sağlayan direktiftir.


<label>Server Name</label>
<input
type="text"
class="form-control"
[(ngModel)]="serverName">
<!--<p>{{ serverName }}</p>-->
<button
class="btn btn-primary"
[disabled]="!allowNewServer"
(click)="onCreateServer()">Add Server</button>
