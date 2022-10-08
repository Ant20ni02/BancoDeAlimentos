package mx.tec.prototipo;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.viewpager.widget.PagerAdapter;

public class Image_Adapter extends PagerAdapter {
    private Context mContext;
    private int[] mImages = new int[] {R.drawable.image_1,R.drawable.image_2,R.drawable.image_3,R.drawable.image_4};

    Image_Adapter(Context context){
        mContext = context;
    }
    @Override
    public int getCount() {
        return mImages.length;
    }

    @Override
    public boolean isViewFromObject(View view,Object object) {
        return view == object;
    }

    @Override
    public Object instantiateItem(ViewGroup container, int position) {
        ImageView imageView = new ImageView(mContext);
        imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
        imageView.setImageResource(mImages[position]);
        container.addView(imageView,0);
        return imageView;
    }

    @Override
    public void destroyItem(ViewGroup container, int position,Object object) {
        container.removeView((ImageView) object);
    }
}
