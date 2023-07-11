
# State Management

Web ortami stateless’dir. Bunun anlami bir web sayfasi sinifi her çagirildigi zaman yeniden olusturulur. Ayni seklide http protokolide stateless’dir, sayfa üzerinde istemci bilgilerini tutmaz. Örnegin bir textbox içine metin yazip gönder butonuna basarsaniz bu metin postback olayindan sonra görünmez çünkü sayfa her postbackte yeninde olusturulur.

State Management Türleri

Iki türlü state management vardir:

1.       Istemci Tarafli State Management

·         View State

·         Hidden Field

·         Cookies (Çerezler)

·         Control State

2.       Sunucu Tarafli State Management

·         Session

·         Application Object

·         Caching

·         Database

Istemci tarafli olanlar herhangi bir sunucu kaynagini kullanmazlar. Bilgileri istemci tarafinda tutarlar. Sunucu tarafli olanlar ise bilgileri sucunu kaynaklarinda tutarlar. Istemci tarafli mi yoksa sunucu tarafli mi state management kullanacaginizi seçmek ihtiyaçlariniza ve yukarda verilen kriterlere baglidir.
