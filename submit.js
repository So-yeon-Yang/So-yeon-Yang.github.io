var upload = document.getElementById('upload');
upload.onclick = showImage;

function showImage() {
    var newImage =
}

@Controller
@RequestMapping("/upload")
public class FileUploadController {
    @Value("${custom.genFileDirPath}")
    private String genFileDirPath;    // 하드코딩 되어 있는 링크를 이렇게 변수로 관리한다.

    @RequestMapping("")
    @ResponseBody
    public String upload(@RequestParam("img1") MultipartFile img1, @RequestParam("img2") MultipartFile img2) {
        try {
            img1.transferTo(new File(genFileDirPath + "/1.png"));
            img2.transferTo(new File(genFileDirPath + "/2.png"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return "업로드 완료!";
    }
}